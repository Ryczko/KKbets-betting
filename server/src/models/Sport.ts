import Joi from 'joi';
import mongoose from 'mongoose';

interface ISport extends mongoose.Document {
    name: string;
}

const sportSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const Sport = mongoose.model<ISport>('Sport', sportSchema);

function validateSport(sport: typeof Sport): Joi.ValidationResult {
    const schema = Joi.object({
        name: Joi.string().required()
    });

    return schema.validate(sport);
}

export { Sport, validateSport };
