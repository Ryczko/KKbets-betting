import Match from 'components/Events/Match';

function MainPage(): JSX.Element {
    return (
        <div>
            <Match
                eventId={'234'}
                date={'10.10.2021'}
                teamAway={'Barcelona'}
                teamHome={'Real Madryt'}
                courseAwayWin={4}
                courseDraw={3.4}
                courseHomeWin={2.2}
            />
        </div>
    );
}

export default MainPage;
