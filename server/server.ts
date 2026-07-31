import express, { type Express, type Request, type Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB  from './config/db.ts';

dotenv.config();



const app: Express = express();
app.use(express.json());
const port = 3000;
connectDB();
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});