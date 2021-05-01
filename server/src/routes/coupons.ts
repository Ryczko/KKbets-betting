import express, { Request, Response } from 'express';
import passport from 'passport';
import { Category } from '../models/Category';
import { Coupon } from '../models/Coupon';
import { BetTypes, EventsStates, UserBets } from '../models/enums';
import { Event, IEvent } from '../models/Event';
import { Team } from '../models/Team';
import { IUser, User } from '../models/User';
import { UsersEvent } from '../models/UsersEvent';

const isAuthenticated = passport.authenticate('jwt', { session: false });

const router = express.Router();

const validateEvents = (eventsData: IEvent[]): number => {
    const currentTime = new Date().getTime();
    for (let i = 0; i < eventsData.length; i++) {
        if (currentTime >= new Date(eventsData[i].date).getTime()) {
            return 1;
        }
    }
    return 0;
};

const checkPointsAmount = (user: IUser, amount: number): number => {
    if (user.points < amount) return 1;
};

const getCourse = (eventData: IEvent, betType: BetTypes, userBet: UserBets) => {
    if (betType === BetTypes.WINNER) {
        if (userBet === UserBets.HOME) return eventData.courseHomeWin;
        if (userBet === UserBets.DRAW) return eventData.courseDraw;
        if (userBet === UserBets.AWAY) return eventData.courseAwayWin;
    }
    return 0;
};

router.get('/', isAuthenticated, async (req: Request, res: Response) => {
    try {
        const coupons = await Coupon.find({ owner: req.user._id });

        res.status(200).send(coupons);
    } catch (err) {
        console.log(err);
        res.status(500).send('Something went wrong.').end();
    }
});

router.get('/:id', isAuthenticated, async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const coupon = await Coupon.findById(id);

        const populateQuery = [
            { path: 'teamHome', model: Team },
            { path: 'teamAway', model: Team },
            { path: 'category', model: Category }
        ];
        const couponEvents = await UsersEvent.find({ coupon: coupon._id }).populate({
            path: 'event',
            model: Event,
            populate: populateQuery
        });

        const couponRes = {
            coupon,
            couponEvents: couponEvents
        };
        res.status(200).send(couponRes);
    } catch (err) {
        console.log(err);
        res.status(500).send('Something went wrong.').end();
    }
});

router.post('/', isAuthenticated, async (req: Request, res: Response) => {
    try {
        const { events, amount, betTypes, usersBets } = req.body;
        const user = await User.findById(req.user._id);

        const eventsData: IEvent[] = [];
        for (let i = 0; i < events.length; i++) {
            const event = await Event.findById(events[i]);
            eventsData.push(event);
        }

        if ((await validateEvents(eventsData)) === 1) {
            return res.status(400).send('incorect events data').end();
        }

        if ((await checkPointsAmount(user, amount)) === 1) {
            return res.status(400).send('User does not have enough points').end();
        }

        const coupon = new Coupon({
            owner: user._id,
            amount: amount,
            state: EventsStates.PENDING,
            date: new Date()
        });

        let totalCourse = 1;

        for (let index = 0; index < events.length; index++) {
            const betCourse = getCourse(eventsData[index], betTypes[index], usersBets[index]);
            if (!betCourse) return res.status(400).send('Invalid bet type');
            const usersEvent = new UsersEvent({
                coupon: coupon._id,
                state: EventsStates.PENDING,
                event: eventsData[index].id,
                betType: betTypes[index],
                userBet: usersBets[index],
                course: betCourse
            });
            await usersEvent.save();
            totalCourse *= betCourse;
        }

        const wallet = user.points;
        coupon.totalCourse = +totalCourse.toFixed(2);
        coupon.possiblyWin = Math.round(totalCourse * amount);

        await user.updateOne({ points: wallet - amount });
        await user.save();
        await coupon.save();

        res.send('Coupon has been created');
    } catch (error) {
        console.log(error);
        res.status(500).send('Something went wrong.').end();
    }
});

export default router;
