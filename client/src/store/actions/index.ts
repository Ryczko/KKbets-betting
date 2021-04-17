import { CouponState } from 'store/reducers/coupon';

export { addEvent } from './coupon';

export interface AppState {
    coupon: CouponState;
}
