import express from 'express';
import upload from '../multer.js';
import {
  activateShop,
  createShop,
  getSeller,
  logOutSeller,
  loginSeller,
} from '../controllers/shop.js';
import { isSellerAuthenticated } from '../middleware/auth.js';

const ShopRouter = express.Router();

ShopRouter.post('/create-shop', upload.single('file'), createShop);
ShopRouter.post('/activation', activateShop);
ShopRouter.post('/login-seller', loginSeller);
ShopRouter.get('/get-seller', isSellerAuthenticated, getSeller);
ShopRouter.get('/logout', isSellerAuthenticated, logOutSeller);

export default ShopRouter;
