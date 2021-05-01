import { MatchType } from './Match.model';

export interface CouponEventType {
    eventId: string;
    betType: string;
    eventName: string;
    course: number;
    userBet: string;
    state: 'win' | 'loss' | 'pending';
    event?: MatchType;
}
