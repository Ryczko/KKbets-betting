import express, { Request, Response } from 'express';
import { Coupon, validateCoupon } from '../models/Coupon';
import { BetTypes, EventsStates, UserTypes } from '../models/enums';
import { Event } from '../models/Event';
import { User } from '../models/User';
import { UsersEvent } from '../models/UsersEvent';
const router = express.Router();

const validateEvents = async (eventsIds: string[]): Promise<number> => {
    const currentTime = new Date().getTime();
    for (let i = 0; (i = eventsIds.length); i++) {
        const event = await Event.findById(eventsIds[i]);
        if (currentTime >= event.date.getTime()) {
            return 1;
        }
    }
    return 0;
};

const checkPointsAmount = async (userId: string, amount: number): Promise<number> => {
    const user = await User.findById(userId);
    if (user.points < amount) return 1;
};

const getCourseByEventId = async (eventId: string, betType: BetTypes, userType: UserTypes) => {
    const event = await Event.findById(eventId);
    if (betType === BetTypes.MAIN_RESULT) {
        if (userType === UserTypes.HOME) return event.courseHomeWin;
        if (userType === UserTypes.DRAW) return event.courseDraw;
        if (userType === UserTypes.AWAY) return event.courseAwayWin;
    }
    return 0;
};

router.post('/', async (req: Request, res: Response) => {
    try {
        if ((await validateEvents(req.body.events)) === 1) {
            return res.status(400).send('incorect events data').end();
        }
        if ((await checkPointsAmount(req.user._id, req.body.amount)) === 1) {
            return res.status(400).send('User does not have enough points').end();
        }

        const usersEventIds: string[] = [];

        let totalCourse = 1;

        req.body.betsData.forEach(async (betData) => {
            const course = await getCourseByEventId(betData.eventId, betData.betType, betData.userType);
            if (!course) return res.status(400).send('Invalid bet type');
            const usersEvent = new UsersEvent({
                state: EventsStates.PENDING,
                event: betData.eventId,
                betType: betData.betType,
                userType: betData.userType,
                course: course
            });
            await usersEvent.save();
            usersEventIds.push(usersEvent.id);
            totalCourse *= course;
        });

        const user = await User.findById(req.user._id);
        const wallet = user.points;

        const coupon = new Coupon({
            owner: req.user._id,
            events: usersEventIds,
            amount: req.body.amount,
            state: EventsStates.PENDING,
            totalCourse: totalCourse.toFixed(2),
            possiblyWin: Math.round(totalCourse * req.body.amount),
            date: new Date()
        });

        const { error } = validateCoupon(coupon);
        if (error) return res.status(400).send(error.details[0].message);

        user.update({ points: wallet - req.body.amount });
        await coupon.save();

        res.send(coupon);
    } catch (error) {
        res.status(500).send('Something went wrong.').end();
    }
});

export default router;
