import * as mongoose from 'mongoose';
import { BetTypes, EventsStates, UserBets } from './Enums';
import { IEventFrontend } from './Event';

interface IUsersEventShared {
  state: EventsStates;
  betType: BetTypes;
  userBet: UserBets;
  course: number;
}

export interface IUsersEventFrontend extends IUsersEventShared {
  eventId: string;
  eventName: string;
  event?: IEventFrontend;
}

export interface IUsersEventBackend extends IUsersEventShared {
  coupon: mongoose.Schema.Types.ObjectId;
  event: mongoose.Schema.Types.ObjectId;
}
