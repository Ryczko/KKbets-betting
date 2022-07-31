import * as Joi from 'joi';
import * as mongoose from 'mongoose';
import { ICategoryBackend } from '@kkbets/api-interfaces';

const categorySchema = new mongoose.Schema<ICategoryBackend>({
  name: {
    type: String,
    required: true
  }
});

const Category = mongoose.model<ICategoryBackend>('Category', categorySchema);

function validateCategory(category: typeof Category): Joi.ValidationResult {
  const schema = Joi.object({
    name: Joi.string().required()
  });

  return schema.validate(category);
}

export { Category, validateCategory };
