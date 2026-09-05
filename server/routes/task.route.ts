import { Router } from 'express';
import { createTask,getTasks,editTask,deleteTask } from '../controllers/task.controller.ts';
import {authMiddleware} from '../middleware/auth.middleware.ts';

const Taskrouter = Router();

Taskrouter.post('/createtask', authMiddleware, createTask);
Taskrouter.get('/gettasks', authMiddleware, getTasks);
Taskrouter.put('/edittask/:taskId', authMiddleware, editTask);
Taskrouter.delete('/deletetask/:taskId', authMiddleware, deleteTask);
export default Taskrouter;