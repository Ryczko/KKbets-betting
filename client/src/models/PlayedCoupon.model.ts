import { CouponEventType } from './CouponEvent.model';

export interface PlayedCouponType {
    coupon: {
        amount: number;
        totalCourse: number;
        possiblyWin: number;
        state: 'win' | 'loss' | 'pending';
    };
    couponEvents: CouponEventType[];
}
