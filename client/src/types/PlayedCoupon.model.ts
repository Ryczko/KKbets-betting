import { CouponEventType } from './CouponEvent.model';
import { EventsStates } from './EventState.model';

export interface PlayedCouponType {
    coupon: {
        amount: number;
        totalCourse: number;
        possiblyWin: number;
        state: EventsStates;
    };
    couponEvents: CouponEventType[];
}
