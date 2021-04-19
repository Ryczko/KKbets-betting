import { StyledCoupon } from './Coupon.css';
import Button from 'shared/Button/Button';
import CouponEvent from './CouponEvent';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { AppState, updateAmount } from 'store/actions';

function Coupon(): JSX.Element {
    const [eventsList, setEventsList] = useState<JSX.Element[]>([]);
    const possibleWinning = useSelector<AppState, AppState['coupon']['possibleWinnings']>(
        (state) => state.coupon.possibleWinnings
    );
    const events = useSelector<AppState, AppState['coupon']['events']>((state) => state.coupon.events);
    const amount = useSelector<AppState, AppState['coupon']['amount']>((state) => state.coupon.amount);
    const totalRate = useSelector<AppState, AppState['coupon']['totalRate']>((state) => state.coupon.totalRate);
    const dispatch = useDispatch();
    const refSlider = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const eventsList = events.map((el) => (
            <CouponEvent
                eventId={el.eventId}
                eventName={el.eventName}
                betType={el.betType}
                course={el.course}
                userBet={el.userBet}
            />
        ));
        setEventsList(eventsList);
    }, [events]);

    const slideAmountHandler = (value: string) => {
        dispatch(updateAmount(+value));
    };

    const typeAmountHandler = (value: string) => {
        dispatch(updateAmount(+value));
        if (refSlider && refSlider.current) {
            refSlider.current.value = value;
        }
    };

    return (
        <StyledCoupon>
            <div className="top">
                Your coupon <i className="icon-trash-empty" />
            </div>

            <div className="events">{eventsList}</div>
            {events.length === 0 && <p style={{ marginTop: '50px' }}>Coupon is empty</p>}
            {events.length !== 0 && (
                <div className="bottom">
                    <div className="amount">
                        <input
                            className="slider"
                            type="range"
                            name=""
                            min="10"
                            step="20"
                            max="1000"
                            onChange={(e) => slideAmountHandler(e.target.value)}
                            ref={refSlider}
                        />
                        <input
                            className="value-field"
                            value={amount}
                            onChange={(e) => typeAmountHandler(e.target.value)}
                        />
                    </div>

                    <div className="info">
                        <div>
                            <span>Total rate</span>
                            <span>{totalRate}</span>
                        </div>
                        <div>
                            <span>Possible winnings</span>
                            <span>{possibleWinning}</span>
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
