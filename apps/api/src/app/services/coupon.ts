import { BetTypes, IEventBackend, IUserBackend, UserBets } from '@kkbets/api-interfaces';

export const validateEvents = (eventsData: IEventBackend[]): number => {
  const currentTime = new Date().getTime();
  for (let i = 0; i < eventsData.length; i++) {
    if (currentTime >= new Date(eventsData[i].date).getTime() || eventsData[i].ended) {
      return 1;
    }
  }
  return 0;
};

export const checkPointsAmount = (user: IUserBackend, amount: number): number => {
  if (user.points < amount) return 1;
};

export const getCourse = (eventData: IEventBackend, betType: BetTypes, userBet: UserBets): number => {
  if (betType === BetTypes.WINNER) {
    if (userBet === UserBets.HOME) return eventData.courseHomeWin;
    if (userBet === UserBets.DRAW) return eventData.courseDraw;
    if (userBet === UserBets.AWAY) return eventData.courseAwayWin;
  }
  return 0;
};
