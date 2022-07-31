import { BetTypes, EventsStates, IUsersEventFrontend, UserBets } from '@kkbets/api-interfaces';
import * as actionTypes from '../actions/actionTypes';
import { AddAction } from '../actions/coupon';

export interface CouponState {
  events: IUsersEventFrontend[];
  totalRate: number;
  amount: number;
  possibleWinnings: number;
}

const initialState = {
  events: [],
  totalRate: 1,
  amount: 20,
  possibleWinnings: 10,
  refreshCoupons: 0
};

const updateRate = (events: IUsersEventFrontend[]): number => {
  let total = 1;
  events.forEach((el) => {
    total *= el.course;
  });
  return +total.toFixed(2);
};

const reducer = (state: CouponState = initialState, action: AddAction): CouponState => {
  switch (action.type) {
    case actionTypes.COUPON_ADD_EVENT: {
      action = action as AddAction;
      const eventIndex = state.events.findIndex((el) => el.eventId === action.eventId);
      let newEvents: IUsersEventFrontend[] = [...state.events];

      const event: IUsersEventFrontend = {
        eventId: action.eventId,
        eventName: action.eventName,
        userBet: action.userBet as UserBets,
        betType: action.betType as BetTypes,
        course: action.course,
        state: EventsStates.PENDING
      };
      if (eventIndex !== -1) {
        newEvents[eventIndex] = event;
      } else {
        newEvents = [...newEvents, event];
      }

      const totalRate = updateRate(newEvents);

      sessionStorage.setItem('coupon', JSON.stringify(newEvents));

      return {
        ...state,
        totalRate,
        possibleWinnings: +(totalRate * state.amount).toFixed(0),
        events: newEvents
      };
    }
    case actionTypes.COUPON_REMOVE_EVENT: {
      const updatedEvents = state.events.filter((el) => el.eventId !== action.eventId);

      const rate = updateRate(updatedEvents);
      const win = +(rate * state.amount).toFixed(0);
      if (updatedEvents.length === 0) {
        sessionStorage.removeItem('coupon');
      } else {
        sessionStorage.setItem('coupon', JSON.stringify(updatedEvents));
      }

      return {
        ...state,
        events: updatedEvents,
        totalRate: rate,
        possibleWinnings: win
      };
    }
    case actionTypes.COUPON_FROM_STORAGE: {
      const savedCouponEvents = sessionStorage.getItem('coupon');
      const amount: string = sessionStorage.getItem('amount') || '20';

      let couponEvents: IUsersEventFrontend[];

      if (savedCouponEvents) {
        couponEvents = JSON.parse(savedCouponEvents) as IUsersEventFrontend[];
        couponEvents.forEach((el) => {
          const event = document.querySelector(`[data-eventid="${el.eventId}"] [data-bet="${el.userBet}"]`);
          if (event) event.classList.add('active');
        });
      } else {
        couponEvents = [];
      }

      const totalRate = updateRate(couponEvents);

      return {
        ...state,
        events: couponEvents,
        amount: +amount,
        totalRate,
        possibleWinnings: +(+amount * totalRate).toFixed(0)
      };
    }
    case actionTypes.COUPON_UPDATE_AMOUNT:
      sessionStorage.setItem('amount', action.amount.toString());

      return {
        ...state,
        amount: action.amount,
        possibleWinnings: +(action.amount * state.totalRate).toFixed(0)
      };
    case actionTypes.COUPON_REMOVE_ALL:
      sessionStorage.removeItem('coupon');
      sessionStorage.removeItem('amount');
      return initialState;
    default: {
      return state;
    }
  }
};

export default reducer;
