import { CouponState } from 'store/reducers/coupon';

export { addEvent, removeEvent, getCouponFromStorage, updateAmount } from './coupon';

export interface AppState {
    coupon: CouponState;
}
