import { Request, Response } from 'express';
import { Message } from '../models/Message';
import { User } from '../models/User';
import socket from '../util/socket';

export const getMessages = async (req: Request, res: Response): Promise<void> => {
  try {
    const messages = await Message.find({})
      .sort({ date: -1 })
      .populate({
        path: 'user',
        model: User,
        select: ['username', 'avatarUrl', 'showAvatar', 'admin']
      });
    messages.forEach((message) => {
      /* eslint-disable */
      if (!(message.user as any).showAvatar) {
        (message.user as any).avatarUrl = undefined;
      }
      /*eslint-enable */
    });
    res.send(messages);
  } catch (error) {
    res.status(500).send('Something went wrong.');
  }
};

export const postMessage = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = req.body;

    const messages = await Message.find({}).sort({ date: -1 });
    const userMessages = messages.filter((message) => message.user == data.user);

    if (userMessages.length > 0 && new Date().getTime() - userMessages[0].date.getTime() < 5000) {
      res.status(429).send('Too many requests');
    }

    const message = new Message({
      user: data.user,
      date: new Date(),
      message: data.chatMessage
    });
    await message.save();
    const messageWithData = await Message.findById(message._id).populate({
      path: 'user',
      model: User,
      select: ['username', 'avatarUrl', 'showAvatar', 'admin']
    });

    if (!(messageWithData.user as any).showAvatar) {
      (messageWithData.user as any).avatarUrl = undefined;
    }

    socket.getIO().emit('Output Chat Message', messageWithData);
    res.status(200).send('success');
  } catch (e) {
    res.status(500).send('Something went wrong');
  }
};
