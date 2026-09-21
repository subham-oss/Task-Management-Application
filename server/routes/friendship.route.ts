import { Router } from 'express';
import {sendFriendRequest,acceptFriendRequest} from '../controllers/FriendRequest.controller.ts';
import {authMiddleware} from '../middleware/auth.middleware.ts';

const Friendrouter = Router();
Friendrouter.post('/sendfriendrequest', authMiddleware, sendFriendRequest);
Friendrouter.post('/acceptfriendrequest', authMiddleware, acceptFriendRequest);
export default Friendrouter;