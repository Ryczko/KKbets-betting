import Joi from 'joi';
import mongoose, { Document } from 'mongoose';
import jwt from 'jsonwebtoken';
import passwordComplexity from 'joi-password-complexity';

export interface IUser extends Document {
    id: string;
    username: string;
    password: string;
    email: string;
    points: number;
    googleId?: string;
    admin?: boolean;
    generateAuthToken: () => string;
}

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        minLength: 8,
        maxLength: 1024,
        required: false
    },
    username: {
        type: String,
        minLength: 2,
        maxLength: 30,
        unique: true,
        required: true
    },
    points: {
        type: Number,
        default: 1000
    },
    googleId: {
        type: String
    },
    id: {
        type: String
    },
    admin: {
        type: Boolean
    }
});

userSchema.methods.generateAuthToken = function () {
    return jwt.sign({ _id: this._id }, process.env.JWT_PRIVATE_KEY || 'privateKey');
};

const User = mongoose.model<IUser>('User', userSchema);

function validateUser(user: typeof User): Joi.ValidationResult {
    const schema = Joi.object({
        email: Joi.string().required().email(),
        googleId: Joi.string(),
        password: passwordComplexity().required(),
        username: Joi.string().min(2).max(30).required(),
        points: Joi.number()
    });

    return schema.validate(user);
}

export { User, validateUser };
