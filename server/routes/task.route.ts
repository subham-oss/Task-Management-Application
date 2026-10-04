import { Router } from 'express';
import { createTask,getTasks,editTask,deleteTask,shareTask,getOneTask } from '../controllers/task.controller.ts';
import {authMiddleware} from '../middleware/auth.middleware.ts';

const Taskrouter = Router();

Taskrouter.post('/createtask', authMiddleware, createTask);
Taskrouter.get('/gettasks', authMiddleware, getTasks);
Taskrouter.get('/getonetask/:taskId', authMiddleware, getOneTask);
Taskrouter.put('/edittask/:taskId', authMiddleware, editTask);
Taskrouter.delete('/deletetask/:taskId', authMiddleware, deleteTask);
Taskrouter.post('/sharetask/:taskId', authMiddleware, shareTask);
export default Taskrouter;