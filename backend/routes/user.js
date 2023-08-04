import express from 'express';
import upload from '../multer.js';
import {
  createUser,
  activateUser,
  loginUser,
  getUser,
} from '../controllers/user.js';
import { isAuthenticated } from '../middleware/auth.js';

const UserRouter = express.Router();

UserRouter.post('/create-user', upload.single('file'), createUser);
UserRouter.post('/activation', activateUser);
UserRouter.post('/login-user', loginUser);
UserRouter.get('/get-user', isAuthenticated, getUser);

export default UserRouter;
