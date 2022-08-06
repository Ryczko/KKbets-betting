import ReactDom from 'react-dom';
import { StyledEventCounterMobile } from './EventCounterMobile.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppState } from '../../../store/actions';

function CouponMobile(): JSX.Element | null {
  const events = useSelector<AppState, AppState['coupon']['events']>((state) => state.coupon.events);

  if (events.length > 0) {
    return ReactDom.createPortal(
      <Link to="/coupon">
        <StyledEventCounterMobile>{events.length}</StyledEventCounterMobile>
      </Link>,
      document.getElementById('mobile-coupon')!
    );
  } else return null;
}

export default CouponMobile;
