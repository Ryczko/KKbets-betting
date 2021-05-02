import express, { Request, Response } from 'express';
import { User } from '../models/User';
const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const users = await User.find({}).sort({ points: -1 }).limit(10);
        users.forEach((user) => {
            user.googleId = undefined;
            user.email = undefined;
        });

        res.send(users);
    } catch (error) {
        res.status(500).send('Something went wrong.').end();
    }
});

export default router;
