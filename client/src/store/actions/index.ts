import { CouponState } from 'store/reducers/coupon';

export { addEvent, removeEvent } from './coupon';

export interface AppState {
    coupon: CouponState;
}
