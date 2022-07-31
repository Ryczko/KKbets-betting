import { BetTypes, EventsStates, IUsersEventBackend, UserBets } from '@kkbets/api-interfaces';
import * as Joi from 'joi';
import * as mongoose from 'mongoose';

const usersEventSchema = new mongoose.Schema<IUsersEventBackend>({
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
  userBet: {
    type: UserBets,
    require: true
  },
  course: {
    type: Number,
    require: true
  }
});

const UsersEvent = mongoose.model<IUsersEventBackend>('UsersEvent', usersEventSchema);

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
    userBet: Joi.string()
      .valid(...Object.values(UserBets))
      .required(),
    course: Joi.number().required()
  });

  return schema.validate(usersEvent);
}

export { UsersEvent, validateUsersEvent };
