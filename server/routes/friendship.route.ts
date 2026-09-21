import { Router } from 'express';
import {sendFriendRequest} from '../controllers/FriendRequest.controller.ts';
import {authMiddleware} from '../middleware/auth.middleware.ts';

const Friendrouter = Router();
Friendrouter.post('/sendfriendrequest', authMiddleware, sendFriendRequest);