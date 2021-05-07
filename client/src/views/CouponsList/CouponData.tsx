import React from 'react';
import { StyledCouponData } from './CouponData.css';

import { Link } from 'react-router-dom';
import Status from 'shared/Status/Status';
import { EventsStates } from 'types/EventState.model';

export interface CouponDataProps {
    id: string;
    amount: number;
    win: number;
    status: EventsStates;
}

function CouponData(props: CouponDataProps): JSX.Element {
    return (
        <Link to={`/coupons/${props.id}`}>
            <StyledCouponData>
                <h6>{props.amount}</h6>
                <h6>{props.win}</h6>
                <h6>
                    <Status status={props.status}></Status>
                </h6>
            </StyledCouponData>
        </Link>
    );
}

export default CouponData;
