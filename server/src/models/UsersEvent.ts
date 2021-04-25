import Joi from 'joi';
import mongoose from 'mongoose';
import { BetTypes, EventsStates, UserTypes } from './enums';

interface IUsersEvent extends mongoose.Document {
    coupon: mongoose.Schema.Types.ObjectId;
    state: EventsStates;
    event: mongoose.Schema.Types.ObjectId;
    betType: BetTypes;
    userType: UserTypes;
    course: number;
}

const usersEventSchema = new mongoose.Schema({
    coupon: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Coupon',
        required: true
    },
    state: {
        type: EventsStates,
        default: EventsStates.PENDING
    },
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: true
    },
    betType: {
        type: BetTypes,
        require: true
    },
    userType: {
        type: UserTypes,
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
        coupon: Joi.string().required(),
        state: Joi.string()
            .valid(...Object.values(EventsStates))
            .required(),
        event: Joi.string().required(),
        betType: Joi.string()
            .valid(...Object.values(BetTypes))
            .required(),
        userType: Joi.string()
            .valid(...Object.values(UserTypes))
            .required(),
        course: Joi.number().required()
    });

    return schema.validate(usersEvent);
}

export { UsersEvent, validateUsersEvent };
