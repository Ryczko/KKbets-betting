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
            {loading ? (
                <Loader />
            ) : (
                <>
                    <div className="events">
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
                    </div>
                    <div className="coupon-info">
                        <div className="left">
                            <h4>
                                Amount: <span className="value">{couponData?.coupon.amount} $</span>
                            </h4>

                            <h4>
                                Total course: <span className="value"> {couponData?.coupon.totalCourse}</span>
                            </h4>
                            <h4>
                                Possible win: <span className="value">{couponData?.coupon.possiblyWin} $</span>
                            </h4>
                        </div>
                        <div className="right">
                            <Status
                                style={{ width: '28px', height: '28px', fontSize: '18px' }}
                                status={couponData?.coupon.state || EventsStates.PENDING}
                            ></Status>
                            <h4>{couponData?.coupon.state || EventsStates.PENDING}</h4>
                        </div>
                    </div>
                </>
            )}
        </StyledPlacedCoupon>
    );
}

export default PlacedCoupon;
