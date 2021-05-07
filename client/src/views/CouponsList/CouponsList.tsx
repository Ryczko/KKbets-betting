import axios from 'axios';
import { useEffect, useState } from 'react';
import { BACKEND_URL } from 'utilities/connection';
import CouponData from './CouponData';
import { StyledCouponsList } from './CouponsList.css';

function CouponsList(): JSX.Element {
    const [coupons, setCoupons] = useState<JSX.Element[]>([]);
    useEffect(() => {
        axios
            .get(BACKEND_URL + '/coupons', { withCredentials: true })
            .then((res) => {
                if (res.status === 200) {
                    const couponsElements = res.data.map((coupon: any) => (
                        <CouponData
                            id={coupon._id}
                            amount={coupon.amount}
                            win={coupon.possiblyWin}
                            status={coupon.state}
                        />
                    ));
                    setCoupons(couponsElements);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <StyledCouponsList>
            <h2 className="title">Your coupons </h2>

            <div className="info">
                <h5>amount</h5>
                <h5>possible win</h5>
                <h5>status</h5>
            </div>
            <div className="coupons-list">{coupons}</div>
        </StyledCouponsList>
    );
}

export default CouponsList;
