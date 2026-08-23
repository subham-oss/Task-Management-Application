import { Router } from 'express';
import { register,login,generateAccessToken } from '../controllers/auth.controller.ts';

const userRouter = Router();

// Register route
userRouter.post('/register', register);

// Login route
userRouter.post('/login', login);

//generate token
userRouter.post('/generate-token', generateAccessToken);
export default userRouter;