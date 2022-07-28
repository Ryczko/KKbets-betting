import React, { useEffect, useState } from 'react';
import RankingPlace, {
  RankingPlaceProps,
} from '../../components/Ranking/RankingPlace';
import TopPlaces from '../../components/Ranking/TopPlaces';
import Loader from '../../shared/Spinner/Loader';
import axiosConfig from '../../utilities/axiosConfig';

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
    <>
      {loading ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
}

export default Ranking;
