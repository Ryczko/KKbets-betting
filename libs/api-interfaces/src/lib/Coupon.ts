import * as mongoose from 'mongoose';
import { EventsStates } from './Enums';
import { IUsersEventFrontend } from './UsersEvent';

interface ICouponShared {
  amount: number;
  state: EventsStates;
  totalCourse: number;
  possiblyWin: number;
  date: Date;
}

export interface ICouponFrontend extends ICouponShared {
  couponEvents: IUsersEventFrontend[];
}
export interface ICouponBackend extends ICouponShared {
  owner: mongoose.Schema.Types.ObjectId;
}
