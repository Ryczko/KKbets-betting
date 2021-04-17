import { StyledCoupon } from './Coupon.css';
import Button from 'shared/Button/Button';
import CouponEvent from './CouponEvent';
import { CouponEventType } from 'models/CouponEvent.model';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { AppState } from 'store/actions';

interface CouponProps {
    events: CouponEventType[];
    amount: number;
    totalRate: number;
    possibleWinning: number;
}

function Coupon(props: CouponProps): JSX.Element {
    const [eventsList, setEventsList] = useState<JSX.Element[]>([]);

    useEffect(() => {
        const eventsList = props.events.map((el) => (
            <CouponEvent
                eventId={el.eventId}
                eventName={el.eventName}
                betType={el.betType}
                course={el.course}
                userBet={el.userBet}
            />
        ));
        setEventsList(eventsList);
    }, [props.events]);

    return (
        <StyledCoupon>
            <div className="top">
                Your coupon <i className="icon-trash-empty" />
            </div>

            <div className="events">{eventsList}</div>
            {props.events.length === 0 && <p style={{ marginTop: '50px' }}>Coupon is empty</p>}
            {props.events.length !== 0 && (
                <div className="bottom">
                    <div className="amount">
                        <input className="slider" type="range" name="" min="10" step="20" max="1000" />
                        <input className="value-field" value={props.amount} />
                    </div>

                    <div className="info">
                        <div>
                            <span>Total rate</span>
                            <span>{props.totalRate}</span>
                        </div>
                        <div>
                            <span>Possible winnings</span>
                            <span>{props.possibleWinning}</span>
                        </div>
                    </div>
                    <form>
                        <Button style={{ width: '80%', padding: '10px 0' }} fill>
                            Place a bet
                        </Button>
                    </form>
                </div>
            )}
        </StyledCoupon>
    );
}

const mapStateToProps = (state: AppState) => {
    return {
        events: state.coupon.events,
        totalRate: state.coupon.totalRate,
        amount: state.coupon.amount,
        possibleWinnings: state.coupon.possibleWinnings
    };
};

export default connect(mapStateToProps, null)(Coupon);
