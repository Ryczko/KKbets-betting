import * as express from 'express';
import { Request, Response } from 'express';
import { isAuthenticated } from '../middleware/isAuthenticated';
import { Badge } from '../models/Badge';
import { User } from '../models/User';
const router = express.Router();

router.get('/', isAuthenticated, async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user._id).populate({
      path: 'badges',
      model: Badge
    });
    res.send(user);
  } catch (error) {
    res.status(500).send('Something went wrong.');
  }
});

export default router;
