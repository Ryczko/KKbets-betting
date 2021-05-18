import { StyledMatchMin } from './MatchMin.css';
import { Link } from 'react-router-dom';
import { addEvent } from 'store/actions';
import { useDispatch } from 'react-redux';
import { MatchProps } from './ImportantMatch';

function MatchMin({
    eventId,
    date,
    teamAway,
    teamHome,
    courseAwayWin,
    courseDraw,
    courseHomeWin
}: MatchProps): JSX.Element {
    const dispatch = useDispatch();
    const handleButtonClick = (e: React.MouseEvent<HTMLElement>) => {
        const target = e.target as HTMLTextAreaElement;
        if (target && target.parentElement && target.dataset.bet && target.dataset.course) {
            const activeElement = target.parentElement.querySelector('.active');
            if (activeElement) activeElement.classList.remove('active');
            target.classList.add('active');
            dispatch(
                addEvent(
                    eventId,
                    target.dataset.bet,
                    'winner',
                    +target.dataset.course,
                    `${teamHome.shortName}-${teamAway.shortName}`
                )
            );
        }
    };

    return (
        <StyledMatchMin data-eventid={eventId}>
            <div className="top">
                <div className="teams">
                    {teamHome.shortName}
                    <span> - </span>
                    {teamAway.shortName}
                </div>
                <div className="date">{date}</div>
            </div>

            <div className="buttons hints">
                <div className="hint">1</div>
                <div className="hint">X</div>
                <div className="hint">2</div>
            </div>
            <div className="buttons">
                <button className="course" data-bet="home" data-course={courseHomeWin} onClick={handleButtonClick}>
                    {courseHomeWin}
                </button>
                <button className="course" data-bet="draw" data-course={courseDraw} onClick={handleButtonClick}>
                    {courseDraw}
                </button>
                <button className="course" data-bet="away" data-course={courseAwayWin} onClick={handleButtonClick}>
                    {courseAwayWin}
                </button>
            </div>
        </StyledMatchMin>
    );
}

export default MatchMin;
