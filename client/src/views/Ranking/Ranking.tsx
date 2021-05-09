import RankingPlace, { RankingPlaceProps } from 'components/Ranking/RankingPlace';
import React, { useEffect, useState } from 'react';
import axiosConfig from 'utilities/axiosConfig';
import { StyledRanking } from './Ranking.css';

function Ranking(): JSX.Element {
    const [places, setPlaces] = useState<RankingPlaceProps[]>([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const res = await axiosConfig.get('/users');
        setPlaces(res.data);
    };

    return (
        <StyledRanking>
            <div className="info">
                <h5>place</h5>
                <h5>name</h5>
                <h5>points</h5>
            </div>

            {places.map((place, index) => (
                <RankingPlace key={place.username} place={index + 1} username={place.username} points={place.points} />
            ))}
        </StyledRanking>
    );
}

export default Ranking;
