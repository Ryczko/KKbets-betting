import * as Joi from 'joi'
import * as mongoose from 'mongoose';

interface IBadge extends mongoose.Document {
    name: string;
    description: string;
    image: string;
}

const badgeSchema = new mongoose.Schema({
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

const Badge = mongoose.model<IBadge>('Badge', badgeSchema);

function validateBadge(team: typeof Badge): Joi.ValidationResult {
    const schema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
        image: Joi.string().required()
    });

    return schema.validate(team);
}

export { Badge, validateBadge };
