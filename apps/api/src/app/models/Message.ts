import { IMessageBackend } from '@kkbets/api-interfaces';
import * as Joi from 'joi';
import * as mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});

const Message = mongoose.model<IMessageBackend>('Message', messageSchema);

function validateMessage(message: typeof Message): Joi.ValidationResult {
  const schema = Joi.object({
    message: Joi.string().required(),
    user: Joi.string().required(),
    date: Joi.date().required()
  });

  return schema.validate(message);
}

export { Message, validateMessage };
