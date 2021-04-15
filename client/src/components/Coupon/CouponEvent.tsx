import { StyledCouponEvent } from './CouponEvent.css';
import { Link } from 'react-router-dom';

interface CouponEventProps {
    eventId: string;
    betType: string;
    eventName: string;
    course: number;
    userBet: string;
}

function CouponEvent(props: CouponEventProps): JSX.Element {
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
                <i className="icon-cancel" />
            </div>
        </StyledCouponEvent>
    );
}

export default CouponEvent;
