import express from 'express';
import dotenv from 'dotenv';
import ErrorHandler from './middleware/error.js';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import router from './routes/Index.js';
import cors from 'cors';

const app = express();

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use('/', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

// config
if (process.env.NODE_ENV !== 'production') {
  dotenv.config({
    path: 'config/.env',
  });
}

// import routes
app.use('/api/v1', router);

// its for ErrorHandling
app.use(ErrorHandler);

export default app;
