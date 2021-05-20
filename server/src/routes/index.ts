import express, { static as serveStatic } from 'express';
import categories from './categories';
import teams from './teams';
import events from './events';
import google from './google';
import coupons from './coupons';
import { IUser } from '../models/User';
import me from './me';
import users from './users';
import bonus from './bonus';
import * as path from 'path';

declare module 'express' {
    export interface Request {
        user: IUser;
    }
}

const router = express.Router();

router.use('/api/google', google);
router.use('/api/categories', categories);
router.use('/api/teams', teams);
router.use('/api/events', events);
router.use('/api/coupons', coupons);
router.use('/api/me', me);
router.use('/api/users', users);
router.use('/api/bonus', bonus);

const publicPath = path.join(__dirname, '../../../client/build');
router.use(serveStatic(publicPath));
router.use('*', (req, res) => {
    return res.sendFile(path.join(publicPath, './index.html'));
});

export default router;
