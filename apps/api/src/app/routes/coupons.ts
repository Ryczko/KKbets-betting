import * as express from 'express';

import { getCoupon, getUsersCoupons, postCoupon } from '../controllers/coupon';
import { isAuthenticated } from '../middleware/isAuthenticated';

const router = express.Router();

router.get('/', isAuthenticated, getUsersCoupons);
router.get('/:id', isAuthenticated, getCoupon);
router.post('/', isAuthenticated, postCoupon);

export default router;
