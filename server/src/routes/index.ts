import express from 'express';
import categories from './categories';
import teams from './teams';
import events from './events';
import google from './google';
import coupons from './coupons';
import { IUser } from '../models/User';
import me from './me';
import users from './users';
import bonus from './bonus';

declare module 'express' {
    export interface Request {
        user: IUser;
    }
}

const router = express.Router();

router.use('/google', google);
router.use('/categories', categories);
router.use('/teams', teams);
router.use('/events', events);
router.use('/coupons', coupons);
router.use('/me', me);
router.use('/users', users);
router.use('/bonus', bonus);

export default router;
