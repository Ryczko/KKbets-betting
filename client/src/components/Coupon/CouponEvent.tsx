import { StyledCouponEvent } from './CouponEvent.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeEvent } from 'store/actions';

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
                <Link to={`/event/${props.eventId}`}>
                    <span className="event"> {props.eventName}</span>
                </Link>
                <span className="bet-type"> {props.betType}</span>
            </div>
            <div className="right">
                <span className="bet"> {props.userBet}</span>-<span className="course">{props.course}</span>
                <i className="icon-cancel" onClick={handleRemoveEvent} />
            </div>
        </StyledCouponEvent>
    );
}

export default CouponEvent;
