import * as Joi from 'joi';
import * as mongoose from 'mongoose';
import * as jwt from 'jsonwebtoken';
import { IUserBackend } from '@kkbets/api-interfaces';

const userSchema = new mongoose.Schema<IUserBackend>({
  email: {
    type: String,
    unique: true,
    required: true
  },
  username: {
    type: String,
    minLength: 2,
    maxLength: 25,
    unique: true,
    required: true
  },
  points: {
    type: Number,
    default: 500
  },
  googleId: {
    type: String
  },
  admin: {
    type: Boolean
  },
  avatarUrl: {
    type: String
  },
  createdDate: {
    type: Date,
    default: new Date()
  },
  bonusDate: {
    type: Date,
    default: new Date(Date.now() - 864e5)
  },
  showAvatar: {
    type: Boolean,
    default: true
  },
  badges: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Badge'
      }
    ]
  }
});

userSchema.methods.generateAuthToken = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_PRIVATE_KEY || 'privateKey');
};

const User = mongoose.model<IUserBackend>('User', userSchema);

function validateUser(user: typeof User): Joi.ValidationResult {
  const schema = Joi.object({
    email: Joi.string().required().email(),
    googleId: Joi.string(),
    username: Joi.string().min(2).max(25).required(),
    points: Joi.number(),
    showAvatar: Joi.boolean()
  }).unknown(true);

  return schema.validate(user);
}

export { User, validateUser };
