import { CouponState } from '../reducers/coupon';

export { addEvent, removeEvent, getCouponFromStorage, updateAmount } from './coupon';

export interface AppState {
  coupon: CouponState;
}
