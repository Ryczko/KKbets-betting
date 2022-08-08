import { Request, Response } from 'express';
import { User } from '../models/User';

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

    //to do: get validation from model
    if (username.length < 2) return res.status(400).send('username must be at least 2 characters long');
    if (username.length > 25) return res.status(400).send('username must be at most 25 characters long');

    user.username = username;
    user.showAvatar = showAvatar;

    await user.save();

    res.send({ username, showAvatar });
  } catch (error) {
    res.status(500).send('Something went wrong.');
  }
};

export const getUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const user = await User.findOne({ username: req.params.username }).populate('badges');

    if (!user) return res.status(404).send('User not found');

    res.send({
      username: user.username,
      points: user.points,
      avatarUrl: user.showAvatar ? user.avatarUrl : undefined,
      badges: user.badges,
      createdDate: user.createdDate
    });
  } catch (error) {
    res.status(500).send('Something went wrong.');
  }
};
