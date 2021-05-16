import { EventsStates } from 'types/EventState.model';
import { IMatch } from 'types/Match.model';
import Status from 'shared/Status/Status';
import { transformDate } from 'utilities/transformDate';
import { StyledPlacedCouponEvent } from './PlacedCouponEvent.css';

export interface PlacedCouponEventProps {
    betType: string;
    course: number;
    state: EventsStates;
    userBet: string;
    event: IMatch;
}

function PlacedCouponEvent({ betType, course, state, userBet, event }: PlacedCouponEventProps): JSX.Element {
    return (
        <StyledPlacedCouponEvent>
            <div className="left">
                <div className="event-info">{event && event.date ? transformDate(event.date) : '???'}</div>
                <div className="teams-info">
                    <div className="team">
                        <img src={event?.teamHome?.image} />
                        <div>{event?.teamHome?.shortName || '???'}</div>
                    </div>
                    <span> - </span>
                    <div className="team">
                        <img src={event?.teamAway?.image} />
                        <div>{event?.teamAway?.shortName || '???'}</div>
                    </div>
                </div>
                <div className="bet-info">
                    <span>
                        {betType}: {userBet}
                    </span>
                </div>
            </div>
            <div className="right">
                <Status style={{ width: '28px', height: '28px', fontSize: '18px' }} status={state}></Status>
            </div>
        </StyledPlacedCouponEvent>
    );
}

export default PlacedCouponEvent;
