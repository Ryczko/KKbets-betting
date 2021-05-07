import React from 'react';
import { StyledRankingPlace } from './RankingPlace.css';

export interface RankingPlaceProps {
    place: number;
    username: string;
    points: number;
}

function RankingPlace(props: RankingPlaceProps): JSX.Element {
    return (
        <StyledRankingPlace>
            <h6 className="number">{props.place}</h6> <h6 className="name">{props.username}</h6>
            <h6 className="point">{props.points}</h6>
        </StyledRankingPlace>
    );
}

export default RankingPlace;
