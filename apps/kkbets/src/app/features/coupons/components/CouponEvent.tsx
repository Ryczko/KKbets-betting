import { StyledCouponEvent } from './CouponEvent.css';
import { useDispatch } from 'react-redux';
import { removeEvent } from '../../../store/actions';

interface CouponEventProps {
  eventId: string;
  betType: string;
  eventName: string;
  course: number;
  userBet: string;
}

function CouponEvent(props: CouponEventProps): JSX.Element {
  const dispatch = useDispatch();

  const handleRemoveEvent = () => {
    dispatch(removeEvent(props.eventId));
  };

  return (
    <StyledCouponEvent>
      <div className="left">
        <span className="event"> {props.eventName}</span>

        <span className="bet-type"> {props.betType}</span>
        <span className="bet"> {props.userBet}</span>
      </div>
      <div className="right">
        <span className="course">{props.course}</span>
        <i className="icon-cancel" onClick={handleRemoveEvent} />
      </div>
    </StyledCouponEvent>
  );
}

export default CouponEvent;
