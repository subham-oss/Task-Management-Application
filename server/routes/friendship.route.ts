import { Router } from 'express';
import {sendFriendRequest,acceptFriendRequest,getfriend,rejectFriendRequest,getFriendRequests} from '../controllers/FriendRequest.controller.ts';
import {authMiddleware} from '../middleware/auth.middleware.ts';

const Friendrouter = Router();
Friendrouter.post('/sendfriendrequest', authMiddleware, sendFriendRequest);
Friendrouter.post('/acceptfriendrequest', authMiddleware, acceptFriendRequest);
Friendrouter.post('/rejectfriendrequest', authMiddleware, rejectFriendRequest);
Friendrouter.get('/getfriendrequests', authMiddleware, getFriendRequests);
Friendrouter.get('/getfriend', authMiddleware, getfriend);
export default Friendrouter;