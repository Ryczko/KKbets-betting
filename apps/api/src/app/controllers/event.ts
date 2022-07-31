import { Request, Response } from 'express';

import { Category } from '../models/Category';
import { Team } from '../models/Team';
import { Event, validateEvent } from '../models/Event';
import { resolveUserEvent } from '../services/event';
import { UsersEvent } from '../models/UsersEvent';
import { Coupon } from '../models/Coupon';
import { User } from '../models/User';
import { EventsStates } from '@kkbets/api-interfaces';

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
      } else {
        query.date = {
          $lt: new Date()
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
    const { date, category, teamHome, teamAway, courseHomeWin, courseAwayWin, courseDraw, important } = req.body;
    const event = new Event({
      date,
      category,
      teamHome,
      teamAway,
      courseHomeWin,
      courseAwayWin,
      courseDraw,
      important
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
      const result = resolveUserEvent(usersEvents[i].betType, usersEvents[i].userBet, teamHomeScore, teamAwayScore);
      await usersEvents[i].updateOne({ $set: { state: result } });

      const coupon = await Coupon.findById(usersEvents[i].coupon);

      if (coupon.state === EventsStates.PENDING) {
        let couponState = EventsStates.PENDING;
        if (result === 'lost') {
          couponState = EventsStates.LOST;
        } else {
          const allEventsInCoupon = await UsersEvent.find({
            coupon: usersEvents[i].coupon
          });
          const allWonEventsInCoupon = await UsersEvent.find({
            coupon: usersEvents[i].coupon,
            state: EventsStates.WINNING
          });
          if (allEventsInCoupon.length === allWonEventsInCoupon.length) {
            couponState = EventsStates.WINNING;
          }
        }

        if (couponState !== EventsStates.PENDING) {
          await coupon.updateOne({ $set: { state: couponState } });

          if (couponState === EventsStates.WINNING) {
            const user = await User.findById(coupon.owner);
            const wallet = user.points;
            await user.updateOne({ points: wallet + coupon.possiblyWin });
          }
        }
      }
    }

    res.send('success');
  } catch (error) {
    res.status(500).send('Something went wrong.');
  }
};
