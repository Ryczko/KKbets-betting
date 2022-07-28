
import { useContext, useEffect, useState } from 'react';
import EmptyCoupon from '../../components/Coupon/EmptyCoupon';
import { AuthContext } from '../../context/AuthContext';
import AuthRequired from '../../shared/AuthRequired/AuthRequired';
import Loader from '../../shared/Spinner/Loader';
import axiosConfig from '../../utilities/axiosConfig';
import { transformDate } from '../../utilities/transformDate';

import CouponData, { CouponDataProps } from './CouponData';
import { StyledCouponsList } from './CouponsList.css';

function CouponsList(): JSX.Element {
    const [coupons, setCoupons] = useState<CouponDataProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const { isLogged } = useContext(AuthContext);

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
        <>
            {loading ? (
                <Loader />
            ) : (
                <StyledCouponsList>
                    {isLogged ? (
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
                                        date={transformDate(coupon.date)}
                                    />
                                ))}
                            </div>
                        </>
                    ) : (
                        <AuthRequired />
                    )}
                </StyledCouponsList>
            )}
        </>
    );
}

export default CouponsList;
