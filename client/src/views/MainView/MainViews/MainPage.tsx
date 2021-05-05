import axios from 'axios';
import Banner from 'components/Banner/Banner';
import ImportantMatch from 'components/Events/ImportantMatch';
import Match from 'components/Events/Match';
import { MatchType } from 'models/Match.model';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Loader from 'shared/Spinner/Loader';
import { getCouponFromStorage } from 'store/actions';
import { BACKEND_URL } from 'utilities/connection';
import { transformDate } from 'utilities/transformDate';
import { StyledMainPage } from './MainPage.css';

function MainPage(): JSX.Element {
    const [importantMatches, setImportantMatches] = useState<JSX.Element[]>([]);
    const [matches, setMatches] = useState<JSX.Element[]>([]);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const dispatch = useDispatch();

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const res = await axios.get(BACKEND_URL + '/events?ended=false');
        const matches: MatchType[] = res.data.filter((match: MatchType) => !match.important);
        const matchesElements: JSX.Element[] = matches.map(
            ({ _id, date, teamAway, teamHome, courseAwayWin, courseDraw, courseHomeWin }) => (
                <Match
                    eventId={_id}
                    date={transformDate(date)}
                    teamAway={teamAway.shortName}
                    teamHome={teamHome.shortName}
                    courseAwayWin={courseAwayWin}
                    courseDraw={courseDraw}
                    courseHomeWin={courseHomeWin}
                />
            )
        );
        const ImportantMatches: MatchType[] = res.data.filter((match: MatchType) => match.important);
        const ImportantMatchesElements: JSX.Element[] = ImportantMatches.map(
            ({ _id, date, teamAway, teamHome, category, courseAwayWin, courseDraw, courseHomeWin }) => (
                <ImportantMatch
                    eventId={_id}
                    league={category.name}
                    date={transformDate(date)}
                    teamAway={teamAway}
                    teamHome={teamHome}
                    courseAwayWin={courseAwayWin}
                    courseDraw={courseDraw}
                    courseHomeWin={courseHomeWin}
                />
            )
        );
        setImportantMatches(ImportantMatchesElements);
        setMatches(matchesElements);
        setIsLoaded(true);
        dispatch(getCouponFromStorage());
    };

    return (
        <StyledMainPage>
            <Banner image="https://www.betopin.com/wp-content/uploads/CL_SF_Header.jpg" />
            {!isLoaded && <Loader />}
            <div className="important-match-container">{importantMatches}</div>
            {matches}
        </StyledMainPage>
    );
}

export default MainPage;
