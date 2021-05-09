import { IPlayedCoupon } from 'types/PlayedCoupon.model';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'shared/Spinner/Loader';
import Status from 'shared/Status/Status';
import { StyledPlacedCoupon } from './PlacedCoupon.css';
import PlacedCouponEvent from './PlacedCouponEvent';
import { EventsStates } from 'types/EventState.model';
import axiosConfig from 'utilities/axiosConfig';

function PlacedCoupon(): JSX.Element {
    const { id } = useParams<{ id: string }>();
    const [couponData, setCouponData] = useState<IPlayedCoupon>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        loadData();
    }, [id]);

    const loadData = async () => {
        setLoading(true);
        setCouponData(undefined);
        const res = await axiosConfig.get(`/coupons/${id}`);
        setCouponData(res.data);
        setLoading(false);
    };

    return (
        <StyledPlacedCoupon>
            <h2>Coupon data</h2>
            {loading ? (
                <Loader />
            ) : (
                <>
                    {couponData?.couponEvents.map((couponEvent, index) => (
                        <PlacedCouponEvent
                            key={index}
                            betType={couponEvent.betType}
                            course={couponEvent.course}
                            state={couponEvent.state}
                            userBet={couponEvent.userBet}
                            event={couponEvent.event!}
                        />
                    ))}

                    <h4>Amount: {couponData?.coupon.amount}</h4>

                    <h4>Total course: {couponData?.coupon.totalCourse}</h4>
                    <h4>Possible win: {couponData?.coupon.possiblyWin}</h4>
                    <h4>
                        <Status status={couponData?.coupon.state || EventsStates.PENDING}></Status>
                    </h4>
                </>
            )}
        </StyledPlacedCoupon>
    );
}

export default PlacedCoupon;
