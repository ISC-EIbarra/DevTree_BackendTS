import express from 'express';
import 'dotenv/config';
import authRouter from './router';
import { connectDB } from './config/db';

const app = express();

connectDB();

// Enabled form data reading
app.use(express.json());

app.use('/', authRouter);

export default app;
