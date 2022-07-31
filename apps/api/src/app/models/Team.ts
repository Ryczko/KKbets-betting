import { ITeamBackend } from '@kkbets/api-interfaces';
import * as Joi from 'joi';
import * as mongoose from 'mongoose';

const teamSchema = new mongoose.Schema<ITeamBackend>({
  name: {
    type: String,
    required: true
  },
  shortName: {
    type: String,
    required: true
  },
  image: {
    type: String
  }
});

const Team = mongoose.model<ITeamBackend>('Team', teamSchema);

function validateTeam(team: typeof Team): Joi.ValidationResult {
  const schema = Joi.object({
    name: Joi.string().required(),
    shortName: Joi.string().required(),
    image: Joi.string()
  });

  return schema.validate(team);
}

export { Team, validateTeam };
