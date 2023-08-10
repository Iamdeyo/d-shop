import Shop from '../model/shop.js';
import ErrorHandler from '../utils/ErrorHandler.js';
import path from 'path';
import jwt from 'jsonwebtoken';
import sendMail from '../utils/sendMail.js';
import catchAsyncErrors from '../middleware/catchAsyncErrors.js';
import { unlink } from 'fs';
import sendShopToken from '../utils/shopToken.js';

const createShop = async (req, res, next) => {
  const { email, name, password, address, phoneNumber, zipCode } = req.body;
  try {
    const shopEmail = await Shop.findOne({ email: email });
    if (shopEmail) {
      const filename = req.file.filename;
      const filePath = `uploads/${filename}`;
      // delete the uploaded file
      unlink(filePath, (err) => {
        if (err) {
          console.log(err);
          res.status(500).json({ message: 'Error deleting file' });
        }
      });
      return next(new ErrorHandler('User already exists', 400));
    }

    const filename = req.file.filename;
    const fileUrl = path.join(filename);
    const shop = {
      name: name,
      email: email,
      password: password,
      avatar: fileUrl,
      address: address,
      phoneNumber: phoneNumber,
      zipCode: zipCode,
    };

    const activationToken = createActivationToken(shop);

    const activationUrl = `http://localhost:3000/shop/activation/?activation_token=${activationToken}`;
    try {
      await sendMail({
        email: shop.email,
        subject: 'Activate your account',
        message: `Hello ${shop.name}, please click on the link to activate your account: ${activationUrl}`,
      });
      res.status(201).json({
        success: true,
        message: `Please check ${shop.email} to activate your account`,
      });
    } catch (err) {
      return next(new ErrorHandler(err.message, 500));
    }
  } catch (error) {
    return next(new ErrorHandler(err.message, 400));
  }
};

// create activation token
const createActivationToken = (shop) => {
  return jwt.sign(shop, process.env.ACTIVATION_SECRET, {
    expiresIn: '5m',
  });
};

// activate shop
const activateShop = catchAsyncErrors(async (req, res, next) => {
  try {
    const { activation_token } = req.body;

    const newShop = jwt.verify(activation_token, process.env.ACTIVATION_SECRET);
    if (!newShop) {
      return next(new ErrorHandler('Invalid activation token'));
    }

    const { email, name, password, address, phoneNumber, zipCode, avatar } =
      newShop;

    const shopEmail = await Shop.findOne({ email: email });
    if (shopEmail) {
      return next(new ErrorHandler('Shop already exists', 400));
    }

    const shop = await Shop.create({
      name,
      email,
      password,
      avatar,
      address,
      phoneNumber,
      zipCode,
    });

    sendShopToken(shop, 201, res);
  } catch (err) {
    return next(new ErrorHandler(err.message, 400));
  }
});

// login Seller
const loginSeller = catchAsyncErrors(async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(new ErrorHandler('Please fill all fields', 400));
    }

    const seller = await Shop.findOne({ email: email }).select('+password');

    if (!seller) {
      return next(new ErrorHandler("Shop does't exist", 400));
    }

    const isPasswordValid = await seller.comparePassword(password);

    if (!isPasswordValid) {
      return next(new ErrorHandler('Please provide a vaild password', 400));
    }

    sendShopToken(seller, 200, res);
  } catch (err) {
    return next(new ErrorHandler(err.message, 400));
  }
});

// Load Seller
const getSeller = catchAsyncErrors(async (req, res, next) => {
  try {
    const seller = await Shop.findById(req.shop.id);
    if (!seller) {
      return next(new ErrorHandler("Seller doesn't exist", 400));
    }
    res.status(200).json({
      success: true,
      seller,
      message: 'Get Seller Successfully',
    });
  } catch (err) {
    return next(new ErrorHandler(err.message, 500));
  }
});

// Log Out Seller
const logOutSeller = catchAsyncErrors(async (req, res, next) => {
  try {
    res.cookie('seller_token', null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });

    res.status(201).json({
      success: true,
      message: 'Log out successful!',
    });
  } catch (err) {
    return next(new ErrorHandler(err.message, 400));
  }
});

export { createShop, activateShop, logOutSeller, loginSeller, getSeller };
