import {register} from '../controllers/auth.controller.ts';
import { type Router } from 'express';


export const userRouter = (router: Router) => {
    router.post('/register', register);
}