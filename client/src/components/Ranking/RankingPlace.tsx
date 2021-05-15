import Avatar from 'components/User/Avatar';
import React from 'react';
import { StyledRankingPlace } from './RankingPlace.css';

export interface RankingPlaceProps {
    place: number;
    username: string;
    points: number;
    avatarUrl: string;
}

function RankingPlace(props: RankingPlaceProps): JSX.Element {
    return (
        <StyledRankingPlace>
            <Avatar width="40px" blockLink src={props.avatarUrl} />
            <div className="name">{props.username}</div>
            <div className="points">{props.points}</div>
        </StyledRankingPlace>
    );
}

export default RankingPlace;
