import Avatar from '../../../components/Avatar/Avatar';
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
      <p className="place">{props.place}</p>
      <div className="user-data">
        <Avatar username={props.username} width="40px" src={props.avatarUrl} />
        <div className="name">{props.username}</div>
        <div className="points">{props.points}</div>
      </div>
    </StyledRankingPlace>
  );
}

export default RankingPlace;
