import axios from 'axios';
import { PlayedCouponType } from 'models/PlayedCoupon.model';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'shared/Spinner/Loader';
import Status from 'shared/Status/Status';
import { BACKEND_URL } from 'utilities/connection';
import { StyledPlacedCoupon } from './PlacedCoupon.css';
import PlacedCouponEvent from './PlacedCouponEvent';

function PlacedCoupon(): JSX.Element {
    const { id } = useParams<{ id: string }>();
    const [couponData, setCouponData] = useState<PlayedCouponType>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        loadData();
    }, [id]);

    const loadData = async () => {
        setLoading(true);
        setCouponData(undefined);
        const res = await axios.get(`${BACKEND_URL}/coupons/${id}`, { withCredentials: true });
        setCouponData(res.data);
        setLoading(false);
    };

    return (
        <StyledPlacedCoupon>
            <h2>Coupon data</h2>

            {couponData?.coupon && couponData.couponEvents.length > 0 && (
                <>
                    {couponData.couponEvents.map((couponEvent) => (
                        <PlacedCouponEvent
                            betType={couponEvent.betType}
                            course={couponEvent.course}
                            state={couponEvent.state}
                            userBet={couponEvent.userBet}
                            event={couponEvent.event!}
                        />
                    ))}

                    <h4>Amount: {couponData.coupon.amount}</h4>

                    <h4>Total course: {couponData.coupon.totalCourse}</h4>
                    <h4>Possible win: {couponData.coupon.possiblyWin}</h4>
                    <h4>
                        <Status status={couponData.coupon.state}></Status>
                    </h4>
                </>
            )}
            {loading && <Loader />}
        </StyledPlacedCoupon>
    );
}

export default PlacedCoupon;
