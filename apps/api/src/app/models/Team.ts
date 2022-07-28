import * as Joi from 'joi'
import * as mongoose from 'mongoose';

interface ITeam extends mongoose.Document {
    name: string;
    shortName: string;
    image: string;
}

const teamSchema = new mongoose.Schema({
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

const Team = mongoose.model<ITeam>('Team', teamSchema);

function validateTeam(team: typeof Team): Joi.ValidationResult {
    const schema = Joi.object({
        name: Joi.string().required(),
        shortName: Joi.string().required(),
        image: Joi.string()
    });

    return schema.validate(team);
}

export { Team, validateTeam };
