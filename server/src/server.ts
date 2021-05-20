import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import appRouter from './routes';
import cookieParser from 'cookie-parser';

dotenv.config();
import './middleware/passport';

const port = process.env.PORT || 3001;
const env = process.env.NODE_ENV || 'development';
const connection_uri = process.env.MONGODB_URI || 'mongodb://localhost/KKBets';

const app = express();

mongoose.connect(
    connection_uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    },
    () => {
        if (env === 'development') console.log('connected to db');
    }
);

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, Access-Control-Allow-Headers, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,OPTIONS');
    next();
});

app.use(express.json());
app.use(cookieParser());
app.use(appRouter);

app.listen(port, function () {
    if (env === 'development') console.log('App listening on port: ' + port);
});
