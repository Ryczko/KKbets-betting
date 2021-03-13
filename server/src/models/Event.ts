import Joi from 'joi';
import mongoose from 'mongoose';

interface IEvent extends mongoose.Document {
    date: Date;
    category: mongoose.Schema.Types.ObjectId;
    important: boolean;
    teamHome: mongoose.Schema.Types.ObjectId;
    teamAway: mongoose.Schema.Types.ObjectId;
    ended: boolean;
    teamHomeScore: number;
    teamAwayScore: number;
    courseHomeWin: number;
    courseAwayWin: number;
    courseDraw: number;
    otherCourses: unknown;
}

const eventSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    ended: {
        type: Boolean,
        default: false
    },
    important: {
        type: Boolean,
        default: false
    },
    teamHome: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
        require: true
    },
    teamAway: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
        require: true
    },
    teamHomeScore: {
        type: Number
    },
    teamAwayScore: {
        type: Number
    },
    courseHomeWin: {
        type: Number,
        require: true
    },
    courseAwayWin: {
        type: Number,
        require: true
    },
    courseDraw: {
        type: Number,
        require: true
    },
    otherCourses: {
        type: Object
    }
});

const Event = mongoose.model<IEvent>('Event', eventSchema);

function validateEvent(event: typeof Event): Joi.ValidationResult {
    const schema = Joi.object({
        date: Joi.date().required(),
        category: Joi.string().required(),
        important: Joi.boolean(),
        ended: Joi.boolean(),
        teamHome: Joi.string().required(),
        teamAway: Joi.string().required(),
        teamHomeScore: Joi.number(),
        teamAwayScore: Joi.number(),
        courseHomeWin: Joi.number().required(),
        courseAwayWin: Joi.number().required(),
        courseDraw: Joi.number().required(),
        otherCourses: Joi.object()
    });

    return schema.validate(event);
}

export { Event, validateEvent };
