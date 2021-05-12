import { BetTypes, EventsStates, UserBets } from '../util/enums';

export const resolveUserEvent = (
    betType: BetTypes,
    userBet: UserBets,
    scoreHome: number,
    scoreAway: number
): EventsStates => {
    let result = EventsStates.PENDING;
    if (betType === BetTypes.WINNER) {
        if (
            (userBet === UserBets.HOME && scoreHome > scoreAway) ||
            (userBet === UserBets.AWAY && scoreHome < scoreAway) ||
            (userBet === UserBets.DRAW && scoreAway === scoreHome)
        ) {
            result = EventsStates.WINNING;
        } else {
            result = EventsStates.LOST;
        }
    }

    return result;
};
