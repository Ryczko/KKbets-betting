import { useEffect, useState } from 'react';
import EmptyCoupon from '../../features/coupons/components/EmptyCoupon';
import axiosConfig from '../../utilities/axiosConfig';
import { formatDate } from '../../utilities/dateUtils';

import CouponData, { CouponDataProps } from './CouponData';
import { StyledCouponsList } from './CouponsList.css';
import LoaderWrapper from '../../wrappers/LoaderWrapper';
import withProtectedRoute from '../../Hoc/withProtectedRoute';

function CouponsList(): JSX.Element {
  const [coupons, setCoupons] = useState<CouponDataProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadList();
  }, []);

  const loadList = async () => {
    try {
      const res = await axiosConfig.get('/coupons');

      if (res.status === 200) {
        setCoupons(res.data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoaderWrapper isLoading={loading}>
      <StyledCouponsList>
        <>
          {coupons.length > 0 ? (
            <div className="info">
              <h5 className="date">Date</h5>
              <h5 className="amount">Amount</h5>
              <h5 className="win">To win</h5>
              <h5 className="status">Status</h5>
            </div>
          ) : (
            <>
              <EmptyCoupon />
              <p style={{ marginTop: '20px' }}>You don't have any coupons yet.</p>
            </>
          )}

          <div className="coupons-list">
            {coupons.map((coupon) => (
              <CouponData
                key={coupon._id}
                _id={coupon._id}
                amount={coupon.amount}
                possiblyWin={coupon.possiblyWin}
                state={coupon.state}
                date={formatDate(coupon.date, 'dd/MM/yy')}
              />
            ))}
          </div>
        </>
      </StyledCouponsList>
    </LoaderWrapper>
  );
}

export default withProtectedRoute(CouponsList);
