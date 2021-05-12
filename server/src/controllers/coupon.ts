import { Request, Response } from 'express';
import { Category } from '../models/Category';
import { Coupon } from '../models/Coupon';
import { IEvent } from '../models/Event';
import { Team } from '../models/Team';
import { User } from '../models/User';
import { Event } from '../models/Event';
import { UsersEvent } from '../models/UsersEvent';
import { checkPointsAmount, getCourse, validateEvents } from '../services/coupon';
import { EventsStates } from '../util/enums';

export const getUsersCoupons = async (req: Request, res: Response): Promise<void> => {
    try {
        const coupons = await Coupon.find({ owner: req.user._id }).sort({ date: -1 });
        res.status(200).send(coupons);
    } catch (err) {
        res.status(500).send('Something went wrong.');
    }
};

export const getCoupon = async (req: Request, res: Response): Promise<any> => {
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
        res.status(500).send('Something went wrong.');
    }
};

export const postCoupon = async (req: Request, res: Response): Promise<any> => {
    try {
        const { events, amount, betTypes, usersBets } = req.body;
        const user = await User.findById(req.user._id);

        const eventsData: IEvent[] = [];
        for (let i = 0; i < events.length; i++) {
            const event = await Event.findById(events[i]);
            eventsData.push(event);
        }

        if ((await validateEvents(eventsData)) === 1) {
            return res.status(400).send('Some of events has already started');
        }

        if (amount < 20) {
            return res.status(400).send('The minimum bet is 20');
        }

        if ((await checkPointsAmount(user, amount)) === 1) {
            return res.status(400).send('User does not have enough points');
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
        res.status(500).send('Something went wrong.');
    }
};
