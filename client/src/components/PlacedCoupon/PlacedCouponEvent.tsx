import { EventsStates } from 'types/EventState.model';
import { MatchType } from 'types/Match.model';
import Status from 'shared/Status/Status';
import { transformDate } from 'utilities/transformDate';
import { StyledPlacedCouponEvent } from './PlacedCouponEvent.css';

export interface PlacedCouponEventProps {
    betType: string;
    course: number;
    state: EventsStates;
    userBet: string;
    event: MatchType;
}

function PlacedCouponEvent({ betType, course, state, userBet, event }: PlacedCouponEventProps): JSX.Element {
    return (
        <StyledPlacedCouponEvent>
            <div className="event-info">{transformDate(event.date)}</div>
            <div className="teams-info">
                <div className="team-image-container">
                    <img src={event.teamHome.image} />
                </div>
                <span>{event.teamHome.shortName}</span>
                <span> vs </span>
                <span>{event.teamAway.shortName}</span>
                <div className="team-image-container">
                    <img src={event.teamAway.image} />
                </div>
            </div>
            <div className="bet-info">
                <span>
                    {betType}: {userBet}
                </span>
            </div>
            <div className="status-container">
                <Status status={state}></Status>
            </div>
        </StyledPlacedCouponEvent>
    );
}

export default PlacedCouponEvent;
