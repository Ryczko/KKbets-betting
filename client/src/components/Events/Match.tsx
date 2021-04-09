import { StyledMatch } from './Match.css';
import { Link } from 'react-router-dom';

interface MatchMinProps {
    eventId: string;
    date: string;
    teamHome: string;
    teamAway: string;
    courseHomeWin: number;
    courseAwayWin: number;
    courseDraw: number;
}

function MatchMin({
    eventId,
    date,
    teamAway,
    teamHome,
    courseAwayWin,
    courseDraw,
    courseHomeWin
}: MatchMinProps): JSX.Element {
    return (
        <StyledMatch data-eventid={eventId}>
            <Link to={`/event/${eventId}`}>
                <div className="date">{date}</div>
                <div className="teams">
                    <div>{teamHome}</div>vs
                    <div>{teamAway}</div>
                </div>
            </Link>
            <div className="buttons">
                <button className="course" data-bet="1" data-betid="1" data-course={courseHomeWin}>
                    {courseHomeWin}
                </button>
                <button className="course" data-bet="0" data-betid="2" data-course={courseDraw}>
                    {courseDraw}
                </button>
                <button className="course" data-bet="2" data-betid="3" data-course={courseAwayWin}>
                    {courseAwayWin}
                </button>
            </div>
        </StyledMatch>
    );
}

export default MatchMin;
