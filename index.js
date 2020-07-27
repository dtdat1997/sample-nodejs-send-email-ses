import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import async from 'async';
// routes
import emailRoutes from './routes/api/emails.js';

const app = express();

// CORS Middleware
app.use(cors());

// Logger Middleware
app.use(morgan('dev'));

// Bodyparser Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use Routes
app.use('/api/emails', emailRoutes);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

export default app;
