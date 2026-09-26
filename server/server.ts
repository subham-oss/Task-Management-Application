import express, { type Express, type Request, type Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB  from './config/db.ts';
import  userRouter  from './routes/user.route.ts';
import Taskrouter from './routes/task.route.ts';
import Friendrouter from './routes/friendship.route.ts';

dotenv.config();


const app: Express = express();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
  }));
app.use(express.json());
const port = process.env.PORT;
connectDB();
app.use('/api/user', userRouter);
app.use('/api/task', Taskrouter);
app.use('/api/friend', Friendrouter);
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});