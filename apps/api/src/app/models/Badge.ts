import * as Joi from 'joi';
import * as mongoose from 'mongoose';
import { IBadgeBackend } from '@kkbets/api-interfaces';

const badgeSchema = new mongoose.Schema<IBadgeBackend>({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

const Badge = mongoose.model<IBadgeBackend>('Badge', badgeSchema);

function validateBadge(team: typeof Badge): Joi.ValidationResult {
  const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required()
  });

  return schema.validate(team);
}

export { Badge, validateBadge };
