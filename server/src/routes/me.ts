import express, { Request, Response } from 'express';
import { isAuthenticated } from '../middleware/isAuthenticated';
const router = express.Router();

router.get('/', isAuthenticated, async (req: Request, res: Response) => {
    try {
        res.send(req.user);
    } catch (error) {
        res.status(500).send('Something went wrong.');
    }
});

export default router;
