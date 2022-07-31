import * as express from 'express';
import * as mongoose from 'mongoose';
import { config as dotenvConfig } from 'dotenv';
import appRouter from './app/routes';
import * as cookieParser from 'cookie-parser';
import socket from './app/util/socket';

dotenvConfig();
import './app/middleware/passport';
import { Message } from './app/models/Message';
import { User } from './app/models/User';
import path = require('path');
const port = process.env.PORT || 3333;
const env = process.env.NODE_ENV || 'development';
const connection_uri = process.env.MONGODB_URI || 'mongodb://localhost/KKBets';

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
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

//Heroku deploy configuration
const CLIENT_BUILD_PATH = path.join(__dirname, '../kkbets');
app.use(express.static(CLIENT_BUILD_PATH));
app.get('*', (request, response) => {
  response.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
});

const server = app.listen(port, function () {
  if (env === 'development') console.log('App listening on port: ' + port);
});

mongoose
  .connect(connection_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => {
    if (env === 'development') console.log('connected to db');
    socket.init(server);
  })
  .catch((err) => console.log(err));
