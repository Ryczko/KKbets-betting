import Joi from 'joi';
import mongoose from 'mongoose';

interface IEvent extends mongoose.Document {
    date: Date;
    sportId: mongoose.Schema.Types.ObjectId;
    important: boolean;
    teamHomeId: mongoose.Schema.Types.ObjectId;
    teamAwayId: mongoose.Schema.Types.ObjectId;
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
    sportId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sport',
        required: true
    },
    important: {
        type: Boolean,
        default: false
    },
    teamHomeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
        require: true
    },
    teamAwayId: {
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
        sportId: Joi.string().required(),
        important: Joi.boolean().required(),
        teamHomeId: Joi.string().required(),
        teamAwayId: Joi.string().required(),
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
