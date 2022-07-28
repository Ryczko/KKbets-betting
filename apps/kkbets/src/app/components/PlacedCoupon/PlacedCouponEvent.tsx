import Status from '../../shared/Status/Status';
import { EventsStates } from '../../types/EventState.model';
import { IMatch } from '../../types/Match.model';
import { transformDate } from '../../utilities/transformDate';
import { StyledPlacedCouponEvent } from './PlacedCouponEvent.css';

export interface PlacedCouponEventProps {
  betType: string;
  course: number;
  state: EventsStates;
  userBet: string;
  event: IMatch;
}

function PlacedCouponEvent({
  betType,
  course,
  state,
  userBet,
  event,
}: PlacedCouponEventProps): JSX.Element {
  return (
    <StyledPlacedCouponEvent>
      <div className="event-info">
        <div className="date">
          {event && event.date ? transformDate(event.date) : '???'}
        </div>
        <div className="bet-type">
          {betType}: <span className="value">{userBet}</span>
        </div>
        <div className="course">
          course: <span className="value">{course}</span>
        </div>
      </div>
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

      <div className="more-info">
        <div className="score">
          {event?.teamHomeScore ?? '_'} : {event?.teamAwayScore ?? '_'}
        </div>
        <Status
          style={{ width: '28px', height: '28px', fontSize: '18px' }}
          status={state}
        ></Status>
      </div>
    </StyledPlacedCouponEvent>
  );
}

export default PlacedCouponEvent;
