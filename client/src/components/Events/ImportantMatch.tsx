import { StyledImportantMatch } from './ImportantMatch.css';

import { TeamType } from 'models/Team.model';

interface ImportantMatchProps {
    eventId: string;
    league: string;
    teamHome: TeamType;
    teamAway: TeamType;
    date: string;
    courseHomeWin: number;
    courseAwayWin: number;
    courseDraw: number;
}

function ImportantMatch(props: ImportantMatchProps): JSX.Element {
    const handleButtonClick = (e: React.MouseEvent<HTMLElement>) => {
        const target = e.target as HTMLTextAreaElement;
        if (target && target.parentElement) {
            const activeElement = target.parentElement.querySelector('.active');
            if (activeElement) activeElement.classList.remove('active');
            target.classList.add('active');
        }
    };

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
                <div>VS</div>
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
                    data-bet="1"
                    data-betid="1"
                    data-course={props.courseHomeWin}
                    onClick={handleButtonClick}
                >
                    {props.courseHomeWin}
                </button>
                <button
                    className="course"
                    data-bet="0"
                    data-betid="2"
                    data-course={props.courseDraw}
                    onClick={handleButtonClick}
                >
                    {props.courseDraw}
                </button>
                <button
                    className="course"
                    data-bet="2"
                    data-betid="3"
                    data-course={props.courseAwayWin}
                    onClick={handleButtonClick}
                >
                    {props.courseAwayWin}
                </button>
            </div>
        </StyledImportantMatch>
    );
}

export default ImportantMatch;
