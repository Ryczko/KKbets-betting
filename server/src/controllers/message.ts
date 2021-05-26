import { Request, Response } from 'express';
import { Message } from '../models/Message';
import { User } from '../models/User';

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
