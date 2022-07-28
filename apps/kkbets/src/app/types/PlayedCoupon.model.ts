import { ICouponEvent } from './CouponEvent.model';
import { EventsStates } from './EventState.model';

export interface IPlayedCoupon {
  coupon: {
    amount: number;
    totalCourse: number;
    possiblyWin: number;
    state: EventsStates;
  };
  couponEvents: ICouponEvent[];
}
