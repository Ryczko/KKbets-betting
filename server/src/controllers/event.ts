import { Request, Response } from 'express';

import { Category } from '../models/Category';
import { Team } from '../models/Team';
import { Event, validateEvent } from '../models/Event';
import { resolveUserEvent } from '../services/event';
import { UsersEvent } from '../models/UsersEvent';
import { EventsStates } from '../util/enums';
import { Coupon } from '../models/Coupon';
import { User } from '../models/User';

export const getEvents = async (req: Request, res: Response): Promise<any> => {
    try {
        const { ended, started } = req.query;

        const query: { date?; ended?: boolean } = {};
        if (ended !== undefined) {
            query.ended = ended === 'true' ? true : false;
        }

        if (started !== undefined) {
            if (started === 'false') {
                query.date = {
                    $gt: new Date()
                };
            }
        }

        const eventsMainData = await Event.find(query)
            .sort({ date: 1 })
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
        res.status(500).send('Something went wrong.');
    }
};

export const postEvent = async (req: Request, res: Response): Promise<any> => {
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
        res.status(500).send('Something went wrong.');
    }
};

export const updateEvent = async (req: Request, res: Response): Promise<any> => {
    try {
        const { teamHomeScore, teamAwayScore } = req.body;
        const eventId = req.params.id;
        const event = await Event.findById(eventId);
        if (!event) return res.status(404).send('Event was not found.');

        if (teamHomeScore === undefined || !teamAwayScore === undefined) {
            return res.status(404).send('Incorrect data.');
        }
        await event.updateOne({
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
                await coupon.updateOne({ $set: { state: couponState } });

                if (couponState === EventsStates.WINNING) {
                    const user = await User.findById(coupon.owner);
                    const wallet = user.points;
                    await user.updateOne({ points: wallet + coupon.possiblyWin });
                }
            }
        }

        res.send('success');
    } catch (error) {
        res.status(500).send('Something went wrong.');
    }
};
