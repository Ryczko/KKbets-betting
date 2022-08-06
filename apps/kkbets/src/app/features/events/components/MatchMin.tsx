import { StyledMatchMin } from './MatchMin.css';
import { MatchProps } from './ImportantMatch';
import withAddEvent, { WithAddEvent } from '../hoc/withAddEvent';

function MatchMin({
  eventId,
  date,
  teamAway,
  teamHome,
  courseAwayWin,
  courseDraw,
  courseHomeWin,
  addEventHandler
}: MatchProps & WithAddEvent): JSX.Element {
  return (
    <StyledMatchMin data-eventid={eventId}>
      <div className="event-data">
        <div className="teams">
          {teamHome.shortName}
          <span> - </span>
          {teamAway.shortName}
        </div>
        <div className="date">{date}</div>
      </div>

      <div className="courses-box">
        <div className="buttons hints">
          <div className="hint">1</div>
          <div className="hint">X</div>
          <div className="hint">2</div>
        </div>
        <div className="buttons">
          <button className="course" data-bet="home" data-course={courseHomeWin} onClick={addEventHandler}>
            {courseHomeWin}
          </button>
          <button className="course" data-bet="draw" data-course={courseDraw} onClick={addEventHandler}>
            {courseDraw}
          </button>
          <button className="course" data-bet="away" data-course={courseAwayWin} onClick={addEventHandler}>
            {courseAwayWin}
          </button>
        </div>
      </div>
    </StyledMatchMin>
  );
}

export default withAddEvent(MatchMin);
