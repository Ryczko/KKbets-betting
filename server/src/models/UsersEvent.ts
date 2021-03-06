import Joi from 'joi';
import mongoose from 'mongoose';

interface IUsersEvent extends mongoose.Document {
    couponId: mongoose.Schema.Types.ObjectId;
    state: string;
    eventId: mongoose.Schema.Types.ObjectId;
    betType: string;
    course: number;
}

const usersEventSchema = new mongoose.Schema({
    couponId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Coupon',
        required: true
    },
    state: {
        type: String,
        default: 'pending'
    },
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EventId',
        required: true
    },
    betType: {
        type: String,
        require: true
    },
    course: {
        type: Number,
        require: true
    }
});

const UsersEvent = mongoose.model<IUsersEvent>('UsersEvent', usersEventSchema);

function validateUsersEvent(usersEvent: typeof UsersEvent): Joi.ValidationResult {
    const schema = Joi.object({
        couponId: Joi.string().required(),
        state: Joi.string().required(),
        eventId: Joi.string().required(),
        betType: Joi.string().required(),
        course: Joi.number().required()
    });

    return schema.validate(usersEvent);
}

export { UsersEvent, validateUsersEvent };
