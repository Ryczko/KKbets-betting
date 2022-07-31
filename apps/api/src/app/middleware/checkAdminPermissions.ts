import { User } from '../models/User';
import { Request, RequestHandler, Response } from 'express';

export const checkAdminPermissions: RequestHandler = async (req: Request, res: Response, next) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user.admin) {
      return res.status(400).send('You do not have permission');
    }
    next();
  } catch (error) {
    res.status(500).send('Something went wrong');
  }
};
