import { Router } from 'express';
import { register,login,generateAccessToken,logout } from '../controllers/auth.controller.ts';

const userRouter = Router();

// Register route
userRouter.post('/register', register);

// Login route
userRouter.post('/login', login);

//generate token
userRouter.post('/generate-token', generateAccessToken);
// Logout route
userRouter.post('/logout', logout);
export default userRouter;