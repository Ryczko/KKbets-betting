import * as actionsTypes from './actionTypes';

export type Action = {
    type: string;
    eventId: string;
    userBet: string;
    betType: string;
    course: number;
    eventName: string;
};

export const addEvent = (
    eventId: string,
    userBet: string,
    betType: string,
    course: number,
    eventName: string
): Action => {
    return {
        type: actionsTypes.COUPON_ADD_EVENT,
        betType,
        userBet,
        course,
        eventId,
        eventName
    };
};
