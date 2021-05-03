import express, { Request, Response } from 'express';
import { Category } from '../models/Category';
import { Event, validateEvent } from '../models/Event';
import { Team } from '../models/Team';
import { UsersEvent } from '../models/UsersEvent';
const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const eventsMainData = await Event.find({})
            .populate({
                path: 'teamHome',
                model: Team
            })
            .populate({
                path: 'teamAway',
                model: Team
            })
            .populate({
                path: 'category',
                model: Category
            });

        res.send(eventsMainData);
    } catch (error) {
        res.status(500).send('Something went wrong.').end();
    }
});

router.post('/update', async (req: Request, res: Response) => {
    try {
        const event = await Event.findById(req.body.id);
        if (!event) return res.status(404).send('Event was not found.');
        await Event.updateOne({
            $set: { teamHomeScore: req.body.teamHomeScore, teamAwayScore: req.body.teamAwayScore, ended: true }
        });

        const usersEvents = await UsersEvent.find({ event: req.body.id });
        console.log(usersEvents);
        res.send(await Event.findById(event.id));
    } catch (error) {
        res.status(500).send('Something went wrong.').end();
    }
});

router.get('/active', async (req: Request, res: Response) => {
    try {
        const eventsMainData = await Event.find({}).populate({
            path: 'teamHome',
            model: Team
        });

        res.send(eventsMainData);
    } catch (error) {
        res.status(500).send('Something went wrong.').end();
    }
});

router.post('/', async (req: Request, res: Response) => {
    try {
        const event = new Event({
            date: req.body.date,
            category: req.body.category,
            teamHome: req.body.teamHome,
            teamAway: req.body.teamAway,
            courseHomeWin: req.body.courseHomeWin,
            courseAwayWin: req.body.courseAwayWin,
            courseDraw: req.body.courseDraw,
            important: req.body.important
        });
        const { error } = validateEvent(req.body);
        if (error) return res.status(400).send(error.details[0].message);
        await event.save();
        res.status(201).send(event);
    } catch (error) {
        res.status(500).send('Something went wrong.').end();
    }
});

export default router;
