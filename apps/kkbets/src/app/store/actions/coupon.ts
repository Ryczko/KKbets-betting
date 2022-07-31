import * as actionsTypes from './actionTypes';

export type AddAction = {
  type: string;
  eventId: string;
  userBet: string;
  betType: string;
  course: number;
  eventName: string;
  amount: number;
};

export type RemoveAction = {
  type: string;
  eventId: string;
};

export type CouponAction = AddAction | RemoveAction;

export const addEvent = (
  eventId: string,
  userBet: string,
  betType: string,
  course: number,
  eventName: string
): AddAction => {
  return {
    type: actionsTypes.COUPON_ADD_EVENT,
    betType,
    userBet,
    course,
    eventId,
    eventName,
    amount: 1
  };
};

export const removeAllEvents = (): { type: string } => {
  const eventDOM = document.querySelectorAll(`[data-eventid] .active`);
  eventDOM.forEach((el) => {
    el.classList.remove('active');
  });
  return {
    type: actionsTypes.COUPON_REMOVE_ALL
  };
};

export const removeEvent = (id: string): RemoveAction => {
  const eventDOM = document.querySelectorAll(`[data-eventid="${id}"] .active`);
  eventDOM.forEach((el) => {
    el.classList.remove('active');
  });

  return {
    type: actionsTypes.COUPON_REMOVE_EVENT,
    eventId: id
  };
};

export const getCouponFromStorage = (): { type: string } => {
  return {
    type: actionsTypes.COUPON_FROM_STORAGE
  };
};

export const updateAmount = (amount: number): { type: string; amount: number } => {
  return {
    type: actionsTypes.COUPON_UPDATE_AMOUNT,
    amount
  };
};
