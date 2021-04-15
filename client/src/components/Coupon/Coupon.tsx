import { StyledCoupon } from './Coupon.css';
import Button from 'shared/Button/Button';
import CouponEvent from './CouponEvent';
import { CouponEventType } from 'models/CouponEvent.model';

interface CouponProps {
    events: CouponEventType[];
    amount: number;
    totalRate: number;
    possibleWinning: number;
}

function Coupon(props: CouponProps): JSX.Element {
    const eventsList = props.events.map((el) => (
        <CouponEvent
            eventId={el.eventId}
            eventName={el.eventName}
            betType={el.betType}
            course={el.course}
            userBet={el.userBet}
        />
    ));

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

export default Coupon;
