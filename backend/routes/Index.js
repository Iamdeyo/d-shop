import express from 'express';
import UserRouter from './user.js';
import ShopRouter from './shop.js';

const router = express.Router();

router.use('/user', UserRouter);
router.use('/shop', ShopRouter);

export default router;
