import { EventsStates } from './EventState.model';
import { MatchType } from './Match.model';

export interface CouponEventType {
    eventId: string;
    betType: string;
    eventName: string;
    course: number;
    userBet: string;
    state: EventsStates;
    event?: MatchType;
}
