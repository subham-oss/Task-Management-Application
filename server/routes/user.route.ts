import { Router } from 'express';
import { register } from '../controllers/auth.controller.ts';

const userRouter = Router();

userRouter.post('/register', register);

export default userRouter;