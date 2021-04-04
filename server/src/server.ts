import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import appRouter from './routes';
import cookieParser from 'cookie-parser';

dotenv.config();
import './middleware/passport';

const port = process.env.PORT || 3001;
const env = process.env.NODE_ENV || 'development';
const connection_uri = process.env.MONGODB_DEV_URI || 'mongodb://localhost/playground';

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept , Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
    next();
});

app.use(express.urlencoded());
app.use(express.json());
app.use(cookieParser());
app.use(appRouter);

mongoose.connect(connection_uri, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    if (env === 'development') {
        console.log('connected to db');
        app.listen(port, function () {
            if (env === 'development') console.log('App listening on port: ' + port);
        });
    }
});
