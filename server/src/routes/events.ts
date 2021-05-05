import express, { Request, Response } from 'express';
import { Category } from '../models/Category';
import { Coupon } from '../models/Coupon';
import { BetTypes, EventsStates, UserBets } from '../models/enums';
import { Event, validateEvent } from '../models/Event';
import { Team } from '../models/Team';
import { User } from '../models/User';
import { UsersEvent } from '../models/UsersEvent';

const router = express.Router();

const resolveUserEvent = (betType: BetTypes, userBet: UserBets, scoreHome: number, scoreAway: number): EventsStates => {
    let result = EventsStates.PENDING;
    if (betType === BetTypes.WINNER) {
        if (
            (userBet === UserBets.HOME && scoreHome > scoreAway) ||
            (userBet === UserBets.AWAY && scoreHome < scoreAway)
        ) {
            result = EventsStates.WINNING;
        } else if (
            (userBet === UserBets.HOME && scoreHome <= scoreAway) ||
            (userBet === UserBets.AWAY && scoreHome >= scoreAway)
        ) {
            result = EventsStates.LOST;
        }
    }

    return result;
};

router.get('/', async (req: Request, res: Response) => {
    try {
        const query = req.query.ended === undefined ? {} : { ended: !!req.query.active };

        const eventsMainData = await Event.find(query)
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

router.patch('/:id', async (req: Request, res: Response) => {
    try {
        const { teamHomeScore, teamAwayScore } = req.body;
        const eventId = req.params.id;
        const event = await Event.findById(eventId);
        if (!event) return res.status(404).send('Event was not found.');

        if (teamHomeScore === undefined || !teamAwayScore === undefined) {
            return res.status(404).send('Incorrect data.');
        }
        await Event.updateOne({
            $set: { teamHomeScore, teamAwayScore, ended: true }
        });

        const usersEvents = await UsersEvent.find({ event: event._id });
        for (let i = 0; i < usersEvents.length; i++) {
            const result = resolveUserEvent(
                usersEvents[i].betType,
                usersEvents[i].userBet,
                teamHomeScore,
                teamAwayScore
            );
            await usersEvents[i].updateOne({ $set: { state: result } });

            const allEventsInCoupon = await UsersEvent.find({ coupon: usersEvents[i].coupon });

            let couponState = EventsStates.WINNING;
            for (let j = 0; j < allEventsInCoupon.length; j++) {
                if (allEventsInCoupon[j].state === EventsStates.LOST) {
                    couponState = EventsStates.LOST;
                    break;
                } else if (allEventsInCoupon[j].state !== EventsStates.WINNING) {
                    couponState = EventsStates.PENDING;
                    break;
                }
            }

            if (couponState !== EventsStates.PENDING) {
                const coupon = await Coupon.findById(usersEvents[i].coupon);
                await coupon.update({ $set: { state: couponState } });

                if (couponState === EventsStates.WINNING) {
                    const user = await User.findById(coupon.owner);
                    const wallet = user.points;
                    await user.updateOne({ points: wallet + coupon.possiblyWin });
                }
            }
        }

        res.send('success');
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
