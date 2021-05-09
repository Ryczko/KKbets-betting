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
}

function CouponData(props: CouponDataProps): JSX.Element {
    return (
        <Link to={`/coupons/${props._id}`}>
            <StyledCouponData>
                <h6>{props.amount}</h6>
                <h6>{props.possiblyWin}</h6>
                <h6>
                    <Status status={props.state}></Status>
                </h6>
            </StyledCouponData>
        </Link>
    );
}

export default CouponData;
