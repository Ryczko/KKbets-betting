import Banner from 'components/Banner/Banner';
import ImportantMatch from 'components/Events/ImportantMatch';
import Match from 'components/Events/Match';
import { IMatch } from 'types/Match.model';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Loader from 'shared/Spinner/Loader';
import { getCouponFromStorage } from 'store/actions';
import { transformDate } from 'utilities/transformDate';
import { StyledMainPage } from './MainPage.css';
import axiosConfig from 'utilities/axiosConfig';
import EventCounterMobile from 'components/Coupon/EventCounterMobile';

function MainPage(): JSX.Element {
    const [importantMatches, setImportantMatches] = useState<IMatch[]>([]);
    const [matches, setMatches] = useState<IMatch[]>([]);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const dispatch = useDispatch();

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const res = await axiosConfig.get('/events?ended=false&started=false');
        const matches: IMatch[] = res.data.filter((match: IMatch) => !match.important);
        const ImportantMatches: IMatch[] = res.data.filter((match: IMatch) => match.important);

        setImportantMatches(ImportantMatches);
        setMatches(matches);
        setIsLoaded(true);
        dispatch(getCouponFromStorage());
    };

    return (
        <StyledMainPage>
            <EventCounterMobile />

            <Banner image="https://www.betopin.com/wp-content/uploads/CL_SF_Header.jpg" />
            {!isLoaded && <Loader />}
            <div className="important-match-container">
                {importantMatches.map(
                    ({ _id, date, teamAway, teamHome, category, courseAwayWin, courseDraw, courseHomeWin }) => (
                        <ImportantMatch
                            key={_id}
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
                )}
            </div>
            {matches.map(({ _id, date, teamAway, teamHome, courseAwayWin, courseDraw, courseHomeWin }) => (
                <Match
                    key={_id}
                    eventId={_id}
                    date={transformDate(date)}
                    teamAway={teamAway.shortName}
                    teamHome={teamHome.shortName}
                    courseAwayWin={courseAwayWin}
                    courseDraw={courseDraw}
                    courseHomeWin={courseHomeWin}
                />
            ))}
        </StyledMainPage>
    );
}

export default MainPage;
