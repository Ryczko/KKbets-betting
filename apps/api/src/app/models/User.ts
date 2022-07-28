import * as Joi from 'joi'
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import * as jwt from 'jsonwebtoken'

export interface IUser extends Document {
    id: string;
    username: string;
    email: string;
    points: number;
    googleId?: string;
    admin?: boolean;
    avatarUrl: string;
    showAvatar: boolean;
    createdDate: Date;
    bonusDate: Date;
    badges: mongoose.Schema.Types.ObjectId[];
    generateAuthToken: () => string;
}

const userSchema = new mongoose.Schema({
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

const User = mongoose.model<IUser>('User', userSchema);

function validateUser(user: typeof User | IUser): Joi.ValidationResult {
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
