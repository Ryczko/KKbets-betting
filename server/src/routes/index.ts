import express, { Request, Response } from 'express';
import categories from './categories';
import teams from './teams';
import events from './events';
import google from './google';
import coupons from './coupons';
import { IUser } from '../models/User';
const router = express.Router();

router.use('/google', google);
router.use('/categories', categories);
router.use('/teams', teams);
router.use('/events', events);

router.use('/coupons', coupons);

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Express {
        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        export interface User extends IUser {}
    }
}

// test route
router.get('/', (req: Request, res: Response) => {
    res.status(200).send(`response`);
});

export default router;
