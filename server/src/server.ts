import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import appRouter from './routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';
let connection_uri = process.env.MONGODB_DEV_URI || 'mongodb://localhost/playground';

app.use(appRouter);

mongoose.connect(connection_uri, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    if (env === 'development') {
        console.log('connected to db');
        app.listen(port, function () {
            if (env === 'development') console.log('App listening on port: ' + port);
        });
    }
});
