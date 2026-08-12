import { Router } from 'express';
import { register,login } from '../controllers/auth.controller.ts';

const userRouter = Router();

// Register route
userRouter.post('/register', register);

// Login route
userRouter.post('/login', login);
export default userRouter;