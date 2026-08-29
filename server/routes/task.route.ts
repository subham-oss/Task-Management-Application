import { Router } from 'express';
import { createTask } from '../controllers/task.controller.ts';
import {authMiddleware} from '../middleware/auth.middleware.ts';

const Taskrouter = Router();

Taskrouter.post('/task', authMiddleware, createTask);

export default Taskrouter;