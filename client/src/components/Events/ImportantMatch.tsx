import { StyledImportantMatch } from './ImportantMatch.css';

import { ITeam } from 'types/Team.model';
import withAddEvent, { WithAddEvent } from 'Hoc/withAddEvent';

export interface MatchProps {
    eventId: string;
    league: string;
    teamHome: ITeam;
    teamAway: ITeam;
    date: string;
    courseHomeWin: number;
    courseAwayWin: number;
    courseDraw: number;
}

function ImportantMatch(props: MatchProps & WithAddEvent): JSX.Element {
    return (
        <StyledImportantMatch data-eventid={props.eventId}>
            <h3>{props.league}</h3>
            <p className="date">{props.date}</p>
            <div className="match">
                <div className="team-info">
                    <div className="team-image-container">
                        <img src={props.teamHome.image} />
                    </div>
                    {props.teamHome.shortName}
                </div>
                <div className="vs">VS</div>
                <div className="team-info">
                    <div className="team-image-container">
                        <img src={props.teamAway.image} />
                    </div>
                    {props.teamAway.shortName}
                </div>
            </div>
            <div className="buttons hints">
                <div className="hint">1</div>
                <div className="hint">X</div>
                <div className="hint">2</div>
            </div>
            <div className="buttons">
                <button
                    className="course"
                    data-bet="home"
                    data-course={props.courseHomeWin}
                    onClick={props.addEventHandler}
                >
                    {props.courseHomeWin}
                </button>
                <button
                    className="course"
                    data-bet="draw"
                    data-course={props.courseDraw}
                    onClick={props.addEventHandler}
                >
                    {props.courseDraw}
                </button>
                <button
                    className="course"
                    data-bet="away"
                    data-course={props.courseAwayWin}
                    onClick={props.addEventHandler}
                >
                    {props.courseAwayWin}
                </button>
            </div>
        </StyledImportantMatch>
    );
}

export default withAddEvent(ImportantMatch);
