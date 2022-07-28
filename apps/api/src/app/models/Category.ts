import * as Joi from 'joi'
import * as mongoose from 'mongoose';

interface ICategory extends mongoose.Document {
    name: string;
}

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const Category = mongoose.model<ICategory>('Category', categorySchema);

function validateCategory(category: typeof Category): Joi.ValidationResult {
    const schema = Joi.object({
        name: Joi.string().required()
    });

    return schema.validate(category);
}

export { Category, validateCategory };
