import { EventsStates } from './EventState.model';
import { IMatch } from './Match.model';

export interface ICouponEvent {
  eventId: string;
  betType: string;
  eventName: string;
  course: number;
  userBet: string;
  state: EventsStates;
  event?: IMatch;
}
