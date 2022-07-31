import { EventsStates, ICouponBackend } from '@kkbets/api-interfaces';
import * as Joi from 'joi';
import * as mongoose from 'mongoose';

const couponSchema = new mongoose.Schema<ICouponBackend>({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  totalCourse: {
    type: Number,
    required: true
  },
  state: {
    type: EventsStates,
    default: EventsStates.PENDING
  },
  possiblyWin: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

const Coupon = mongoose.model<ICouponBackend>('Coupon', couponSchema);

function validateCoupon(coupon: typeof Coupon): Joi.ValidationResult {
  const schema = Joi.object({
    owner: Joi.string().required(),
    amount: Joi.number().required(),
    totalCourse: Joi.number().required(),
    state: Joi.string()
      .valid(...Object.values(EventsStates))
      .required(),
    possiblyWin: Joi.number().required(),
    date: Joi.date().required()
  });

  return schema.validate(coupon);
}

export { Coupon, validateCoupon };
