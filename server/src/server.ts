import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import appRouter from './routes';
import cookieParser from 'cookie-parser';

dotenv.config();
import './middleware/passport';
import { Message } from './models/Message';
import { User } from './models/User';

const port = process.env.PORT || 3001;
const env = process.env.NODE_ENV || 'development';
const connection_uri = process.env.MONGODB_URI || 'mongodb://localhost/KKBets';

const app = express();

mongoose
    .connect(connection_uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    .then(() => {
        if (env === 'development') console.log('connected to db');
    })
    .catch((err) => console.log(err));

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

const server = app.listen(port, function () {
    if (env === 'development') console.log('App listening on port: ' + port);
});

/* eslint-disable */
const io = require('socket.io')(server, {
    cors: {
        origin: '*'
    }
});

io.on('connection', (socket) => {
    socket.on('newChatMessage', async (data) => {
        const userExists = await User.exists({_id: data.user});
        if(!userExists) return;

        const messages = await Message.find({}).sort({ date: -1 });
        const userMessages = messages.filter(message=> message.user == data.user)

        if (userMessages.length>0 && new Date().getTime() -  userMessages[0].date.getTime() < 5000) return;
      

        if (messages.length >= 50){
            await messages[messages.length-1].deleteOne();
        }
        
        const message = new Message({
            user: data.user,
            date: new Date(),
            message: data.chatMessage
        })
        await message.save();
        const messageWithData = await Message.findById(message._id).populate({
            path: 'user',
            model: User,
            select: ['username', 'avatarUrl', 'showAvatar', 'admin']
        })

        if(!(messageWithData.user as any).showAvatar) {
            (messageWithData.user as any).avatarUrl = undefined;
        }


        io.emit("Output Chat Message", messageWithData)
    });
});
