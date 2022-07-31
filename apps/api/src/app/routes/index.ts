import * as express from 'express';
import categories from './categories';
import teams from './teams';
import events from './events';
import google from './google';
import coupons from './coupons';
import me from './me';
import users from './users';
import bonus from './bonus';
import { IUserBackend } from '@kkbets/api-interfaces';
import messages from './messages';
import * as mongoose from 'mongoose';

declare module 'express' {
  export interface Request {
    user: IUserBackend & mongoose.Document;
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
router.use('/api/messages', messages);

export default router;
