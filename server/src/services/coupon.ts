import { IEvent } from '../models/Event';
import { IUser } from '../models/User';
import { BetTypes, UserBets } from '../util/enums';

export const validateEvents = (eventsData: IEvent[]): number => {
    const currentTime = new Date().getTime();
    for (let i = 0; i < eventsData.length; i++) {
        if (currentTime >= new Date(eventsData[i].date).getTime()) {
            return 1;
        }
    }
    return 0;
};

export const checkPointsAmount = (user: IUser, amount: number): number => {
    if (user.points < amount) return 1;
};

export const getCourse = (eventData: IEvent, betType: BetTypes, userBet: UserBets): number => {
    if (betType === BetTypes.WINNER) {
        if (userBet === UserBets.HOME) return eventData.courseHomeWin;
        if (userBet === UserBets.DRAW) return eventData.courseDraw;
        if (userBet === UserBets.AWAY) return eventData.courseAwayWin;
    }
    return 0;
};
