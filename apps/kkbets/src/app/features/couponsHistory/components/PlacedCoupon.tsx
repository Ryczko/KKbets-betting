import { EventsStates, ICouponFrontend } from '@kkbets/api-interfaces';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Currency from '../../../components/Currency/Currency';
import Loader from '../../../components/Loader/Loader';
import Status from '../../../components/Status/Status';
import axiosConfig from '../../../utilities/axiosConfig';
import LoaderWrapper from '../../../wrappers/LoaderWrapper';

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
    <LoaderWrapper isLoading={loading}>
      <StyledPlacedCoupon>
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
            <div className="info-line">
              Amount: <Currency value={couponData?.amount || '?'} size={16} />
            </div>

            <div className="info-line">
              Total course: <Currency value={couponData?.totalCourse || '?'} size={16} />
            </div>
            <div className="info-line">
              Possible win: <Currency value={couponData?.possiblyWin || '?'} size={16} />
            </div>
          </div>
          <div className="right">
            <Status
              style={{ width: '28px', height: '28px', fontSize: '18px' }}
              status={couponData?.state || EventsStates.PENDING}
            ></Status>
            <div className="info-line">{couponData?.state || EventsStates.PENDING}</div>
          </div>
        </div>
      </StyledPlacedCoupon>
    </LoaderWrapper>
  );
}

export default PlacedCoupon;
