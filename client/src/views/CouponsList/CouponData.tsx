import React from 'react';
import { StyledCouponData } from './CouponData.css';

import { Link } from 'react-router-dom';
import Status from 'shared/Status/Status';
import { EventsStates } from 'types/EventState.model';

export interface CouponDataProps {
    _id: string;
    amount: number;
    possiblyWin: number;
    state: EventsStates;
    date: string;
}

function CouponData(props: CouponDataProps): JSX.Element {
    return (
        <Link to={`/coupons/${props._id}`}>
            <StyledCouponData>
                <div className="date">{props.date}</div>
                <div className="amount">{props.amount}</div>
                <div className="win">{props.possiblyWin}</div>

                <Status style={{ width: '28px', height: '28px', fontSize: '16px' }} status={props.state}></Status>
            </StyledCouponData>
        </Link>
    );
}

export default CouponData;
