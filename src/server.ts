import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import authRouter from './router';
import { connectDB } from './config/db';
import { corsConfig } from './config/cors';

const app = express();

connectDB();

// Cors
app.use(cors(corsConfig));

// Enabled form data reading
app.use(express.json());

app.use('/', authRouter);

export default app;
