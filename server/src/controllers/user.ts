import { Request, Response } from 'express';
import { User } from '../models/User';

export const getBestUsers = async (req: Request, res: Response): Promise<any> => {
    try {
        const users = await User.find({}).sort({ points: -1 }).limit(10);
        users.forEach((user) => {
            user.googleId = undefined;
            user.email = undefined;
            if (!user.showAvatar) {
                user.avatarUrl = undefined;
            }
        });

        res.send(users);
    } catch (error) {
        res.status(500).send('Something went wrong.');
    }
};

export const editUser = async (req: Request, res: Response): Promise<any> => {
    try {
        const { username, showAvatar } = req.body;
        const user = await User.findById(req.user._id);
        const userExists = await User.find({ username });

        if (userExists.length > 0 && user.username !== username) {
            return res.status(400).send('User with that nickname exists');
        }

        await User.findByIdAndUpdate(req.user._id, { username, showAvatar });

        res.send({ username, showAvatar });
    } catch (error) {
        res.status(500).send('Something went wrong.');
    }
};
