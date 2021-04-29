import React from 'react';
import { StyledCouponData } from './CouponData.css';

import { Link } from 'react-router-dom';
import Status from 'shared/Status/Status';

export interface CouponDataProps {
    id: string;
    amount: number;
    win: number;
    status: 'win' | 'loss' | 'pending';
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
