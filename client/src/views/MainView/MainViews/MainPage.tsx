import axios from 'axios';
import Banner from 'components/Banner/Banner';
import Match from 'components/Events/Match';
import { MatchType } from 'models/Match.model';
import { useEffect, useState } from 'react';
import { BACKEND_URL } from 'utilities/connection';
import { transformDate } from 'utilities/transformDate';

function MainPage(): JSX.Element {
    const [matches, setMatches] = useState<JSX.Element[]>([]);
    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const res = await axios.get(BACKEND_URL + '/events');
        const matches: MatchType[] = res.data.filter((match: MatchType) => !match.important);
        const matchesElements: JSX.Element[] = matches.map(
            ({ id, date, teamAway, teamHome, courseAwayWin, courseDraw, courseHomeWin }) => (
                <Match
                    eventId={id}
                    date={transformDate(date)}
                    teamAway={teamAway.shortName}
                    teamHome={teamHome.shortName}
                    courseAwayWin={courseAwayWin}
                    courseDraw={courseDraw}
                    courseHomeWin={courseHomeWin}
                />
            )
        );
        setMatches(matchesElements);
    };

    return (
        <div>
            <Banner image="https://www.betopin.com/wp-content/uploads/CL_SF_Header.jpg" />
            {matches}
        </div>
    );
}

export default MainPage;
