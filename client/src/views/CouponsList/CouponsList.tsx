import { useEffect, useState } from 'react';
import axiosConfig from 'utilities/axiosConfig';
import CouponData, { CouponDataProps } from './CouponData';
import { StyledCouponsList } from './CouponsList.css';

function CouponsList(): JSX.Element {
    const [coupons, setCoupons] = useState<CouponDataProps[]>([]);

    useEffect(() => {
        axiosConfig
            .get('/coupons')
            .then((res) => {
                if (res.status === 200) {
                    setCoupons(res.data);
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
            <div className="coupons-list">
                {coupons.map((coupon) => (
                    <CouponData
                        key={coupon._id}
                        _id={coupon._id}
                        amount={coupon.amount}
                        possiblyWin={coupon.possiblyWin}
                        state={coupon.state}
                    />
                ))}
            </div>
        </StyledCouponsList>
    );
}

export default CouponsList;
