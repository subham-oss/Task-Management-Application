import { Router } from 'express';
import { register,login,generateAccessToken,logout,getUserProfile } from '../controllers/auth.controller.ts';
import {authMiddleware} from '../middleware/auth.middleware.ts';

const userRouter = Router();

// Register route
userRouter.post('/register', register);

// Login route
userRouter.post('/login', login);

//generate token
userRouter.post('/generate-token', generateAccessToken);
// Logout route
userRouter.post('/logout', logout);
// get user profile route
userRouter.get('/profile', authMiddleware, getUserProfile);
export default userRouter;