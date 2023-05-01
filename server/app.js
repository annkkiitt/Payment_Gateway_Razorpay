import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import paymentRoute from './routes/paymentRoutes.js';

config({ path: './config/config.env' });
export const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', paymentRoute);
