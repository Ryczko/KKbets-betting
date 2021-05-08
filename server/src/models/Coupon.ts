import Joi from 'joi';
import mongoose from 'mongoose';
import { EventsStates } from '../util/enums';

interface ICoupon extends mongoose.Document {
    owner: mongoose.Schema.Types.ObjectId;
    amount: number;
    state: EventsStates;
    totalCourse: number;
    possiblyWin: number;
    date: Date;
}

const couponSchema = new mongoose.Schema({
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

const Coupon = mongoose.model<ICoupon>('Coupon', couponSchema);

function validateCoupon(coupon: typeof Coupon | ICoupon): Joi.ValidationResult {
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
