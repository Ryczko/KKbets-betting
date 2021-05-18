import { Request, Response } from 'express';
import { IUser, User, validateUser } from '../models/User';

export const getBestUsers = async (req: Request, res: Response): Promise<any> => {
    try {
        const users = await User.find({}).sort({ points: -1 }).limit(10);

        const usersData = users.map((user) => ({
            username: user.username,
            points: user.points,
            avatarUrl: user.showAvatar ? user.avatarUrl : undefined
        }));

        res.send(usersData);
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

        if (username[0] === ' ') return res.status(400).send('username cannot start with a space');
        if (username[username.length - 1] === ' ') return res.status(400).send('username cannot end with a space');
        if (username.split(' ').length > 2) return res.status(400).send('username can have a maximum of one space');

        user.username = username;
        user.showAvatar = showAvatar;

        const { error } = validateUser(user.toObject() as IUser);
        if (error) return res.status(400).send(error.details[0].message);
        await user.save();

        res.send({ username, showAvatar });
    } catch (error) {
        res.status(500).send('Something went wrong.');
    }
};
