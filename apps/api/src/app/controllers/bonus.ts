import { Request, Response } from 'express';
import { User } from '../models/User';

export const getBonus = async (req: Request, res: Response): Promise<any> => {
  try {
    const user = await User.findById(req.user._id);
    if (user.bonusDate && new Date().getTime() - new Date(user.bonusDate).getTime() < 864e5) {
      return res.status(400).send('You can only claim the bonus once a day');
    }

    await user.updateOne({ points: user.points + 50, bonusDate: new Date() });

    res.send('50$ was received');
  } catch (error) {
    res.status(500).send('Something went wrong.');
  }
};
