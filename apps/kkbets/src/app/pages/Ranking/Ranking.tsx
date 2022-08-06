import React, { useEffect, useState } from 'react';

import Loader from '../../components/Loader/Loader';
import RankingPlace, { RankingPlaceProps } from '../../features/ranking/components/RankingPlace';
import TopPlaces from '../../features/ranking/components/TopPlaces';
import axiosConfig from '../../utilities/axiosConfig';
import LoaderWrapper from '../../wrappers/LoaderWrapper';

import { StyledRanking } from './Ranking.css';

function Ranking(): JSX.Element {
  const [places, setPlaces] = useState<RankingPlaceProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const res = await axiosConfig.get('/users');
      setPlaces(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoaderWrapper isLoading={loading}>
      <StyledRanking>
        <h1>Top 10 players</h1>
        <TopPlaces data={places.slice(0, 3)} />
        {places.slice(3).map((place, index) => (
          <RankingPlace
            key={place.username}
            place={index + 4}
            avatarUrl={place.avatarUrl}
            username={place.username}
            points={place.points}
          />
        ))}
      </StyledRanking>
    </LoaderWrapper>
  );
}

export default Ranking;
