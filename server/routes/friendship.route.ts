import { Router } from 'express';
import {sendFriendRequest,acceptFriendRequest,getfriend} from '../controllers/FriendRequest.controller.ts';
import {authMiddleware} from '../middleware/auth.middleware.ts';

const Friendrouter = Router();
Friendrouter.post('/sendfriendrequest', authMiddleware, sendFriendRequest);
Friendrouter.post('/acceptfriendrequest', authMiddleware, acceptFriendRequest);
Friendrouter.get('/getfriend', authMiddleware, getfriend);
export default Friendrouter;