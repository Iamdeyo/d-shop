import User from '../model/user.js';
import ErrorHandler from '../utils/ErrorHandler.js';
import path from 'path';
import jwt from 'jsonwebtoken';
import sendMail from '../utils/sendMail.js';
import catchAsyncErrors from '../middleware/catchAsyncErrors.js';
import sendToken from '../utils/jwtToken.js';
import { unlink } from 'fs';

const createUser = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    const userEmail = await User.findOne({ email: email });
    if (userEmail) {
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
    const user = {
      name: name,
      email: email,
      password: password,
      avatar: fileUrl,
    };

    console.log(user);

    const activationToken = createActivationToken(user);

    const activationUrl = `http://localhost:3000/activation/?activation_token=${activationToken}`;
    try {
      await sendMail({
        email: user.email,
        subject: 'Activate your account',
        message: `Hello ${user.name}, please click on the link to activate your account: ${activationUrl}`,
      });
      res.status(201).json({
        success: true,
        message: `Please check ${user.email} to activate your account`,
      });
    } catch (err) {
      return next(new ErrorHandler(err.message, 500));
    }
  } catch (err) {
    return next(new ErrorHandler(err.message, 400));
  }
};

// create activation token
const createActivationToken = (user) => {
  return jwt.sign(user, process.env.ACTIVATION_SECRET, {
    expiresIn: '5m',
  });
};

// activate user
const activateUser = catchAsyncErrors(async (req, res, next) => {
  try {
    const { activation_token } = req.body;

    const newUser = jwt.verify(activation_token, process.env.ACTIVATION_SECRET);
    if (!newUser) {
      return next(new ErrorHandler('Invalid activation token'));
    }

    const { name, email, password, avatar } = newUser;

    const userEmail = await User.findOne({ email: email });
    if (userEmail) {
      return next(new ErrorHandler('User already exists', 400));
    }

    const user = await User.create({
      name,
      email,
      password,
      avatar,
    });

    sendToken(user, 201, res);
  } catch (err) {
    return next(new ErrorHandler(err.message, 400));
  }
});

// login user
const loginUser = catchAsyncErrors(async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(new ErrorHandler('Please fill all fields', 400));
    }

    const user = await User.findOne({ email: email }).select('+password');

    if (!user) {
      return next(new ErrorHandler("User does't exist", 400));
    }

    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      return next(new ErrorHandler('Please provide a vaild password', 400));
    }

    sendToken(user, 200, res);
  } catch (err) {
    return next(new ErrorHandler(err.message, 400));
  }
});

// Load User
const getUser = catchAsyncErrors(async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return next(new ErrorHandler("User doesn't exist", 400));
    }
    res.status(200).json({
      success: true,
      user,
      message: 'Get User Successfully',
    });
  } catch (err) {
    return next(new ErrorHandler(err.message, 500));
  }
});

// Log out user
const logOut = catchAsyncErrors(async (req, res, next) => {
  try {
    res.cookie('token', null, {
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
export { createUser, activateUser, loginUser, getUser, logOut };
