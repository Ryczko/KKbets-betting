import * as actionsTypes from './actionTypes';

export type AddAction = {
    type: string;
    eventId: string;
    userBet: string;
    betType: string;
    course: number;
    eventName: string;
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
        eventName
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
