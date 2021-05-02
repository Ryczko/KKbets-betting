import axios from 'axios';
import { useEffect, useState } from 'react';
import { BACKEND_URL } from 'utilities/connection';
import { StyledRanking } from './Ranking.css';
import RankingPlace, { RankingPlaceProps } from './RankingPlace';

function Ranking(): JSX.Element {
    const [places, setPlaces] = useState<JSX.Element[]>([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const res = await axios.get(BACKEND_URL + '/users');

        const data = res.data as RankingPlaceProps[];

        const placesInfo = data.map((place, index) => (
            <RankingPlace place={index + 1} username={place.username} points={place.points} />
        ));
        setPlaces(placesInfo);

        console.log(res.data);
    };

    return (
        <StyledRanking>
            <div className="info">
                <h5>place</h5>
                <h5>name</h5>
                <h5>points</h5>
            </div>

            {places}
        </StyledRanking>
    );
}

export default Ranking;
