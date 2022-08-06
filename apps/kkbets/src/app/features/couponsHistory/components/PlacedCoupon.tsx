import { EventsStates, ICouponFrontend } from '@kkbets/api-interfaces';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../../components/Loader/Loader';
import Status from '../../../components/Status/Status';
import axiosConfig from '../../../utilities/axiosConfig';

import { StyledPlacedCoupon } from './PlacedCoupon.css';
import PlacedCouponEvent from './PlacedCouponEvent';

function PlacedCoupon(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const [couponData, setCouponData] = useState<ICouponFrontend>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadData();
  }, [id]);

  const loadData = async () => {
    setLoading(true);
    setCouponData(undefined);
    const res = await axiosConfig.get(`/coupons/${id}`);
    setCouponData(res.data);
    console.log(res.data);
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
                Amount: <span className="value">{couponData?.amount} $</span>
              </h4>

              <h4>
                Total course: <span className="value"> {couponData?.totalCourse}</span>
              </h4>
              <h4>
                Possible win: <span className="value">{couponData?.possiblyWin} $</span>
              </h4>
            </div>
            <div className="right">
              <Status
                style={{ width: '28px', height: '28px', fontSize: '18px' }}
                status={couponData?.state || EventsStates.PENDING}
              ></Status>
              <h4>{couponData?.state || EventsStates.PENDING}</h4>
            </div>
          </div>
        </>
      )}
    </StyledPlacedCoupon>
  );
}

export default PlacedCoupon;
