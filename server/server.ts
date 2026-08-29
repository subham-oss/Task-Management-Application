import express, { type Express, type Request, type Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB  from './config/db.ts';
import  userRouter  from './routes/user.route.ts';
import Taskrouter from './routes/task.route.ts';

dotenv.config();


const app: Express = express();
app.use(express.json());
const port = process.env.PORT;
connectDB();
app.use(cors()); 
app.use('/api/user', userRouter);
app.use('/api/task', Taskrouter);
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});