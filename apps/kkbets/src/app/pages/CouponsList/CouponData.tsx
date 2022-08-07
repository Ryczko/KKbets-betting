import React from 'react';
import { StyledCouponData } from './CouponData.css';

import { Link } from 'react-router-dom';
import Status from '../../components/Status/Status';
import { EventsStates } from '@kkbets/api-interfaces';
import Currency from '../../components/Currency/Currency';

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
        <div className="amount">
          <Currency value={props.amount} size={13} leftSpacing={3} />
        </div>
        <div className="win">
          <Currency value={props.possiblyWin} size={13} leftSpacing={3} />
        </div>

        <Status style={{ width: '28px', height: '28px', fontSize: '16px' }} status={props.state}></Status>
      </StyledCouponData>
    </Link>
  );
}

export default CouponData;
