import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import paymentRoute from './routes/paymentRoutes.js';

config({ path: './config/config.env' });
export const app = express();

app.use(cors());
app.use('/api', paymentRoute);
