import { StyledLeftMainView } from './LeftMainView.css';
import euroLogo from '../../../../assets/images/euro-logo.png';
import EuroBadge from '../../../../assets/badges/badge-euro-2020.svg';
import EuroBadgeBest from '../../../../assets/badges/badge-euro-2020-best.svg';
import Badge from '../../../components/Badge/Badge';

function LeftMainView(): JSX.Element {
  return (
    <StyledLeftMainView>
      <h1 className="title">Time for Euro 2020!</h1>
      <img src={euroLogo} alt="logo euro" />
      <p className="description">
        The time has come for the long-awaited euro 2020. Don't waste your time, and bet. Beat the rest of the players
        and become a football specialist!
      </p>

      <div className="badges">
        <h3>Play and win unique badges!</h3>
        <div className="badges-box">
          <Badge
            src={EuroBadge}
            name="Euro badge"
            description="For participation in Euro 2020"
            style={{ margin: '0 7px' }}
            width={70}
          />
          <Badge
            src={EuroBadgeBest}
            name="Euro best badge"
            description="For the best and most active players during Euro 2020"
            style={{ margin: '0 7px' }}
            width={70}
          />
        </div>
      </div>
    </StyledLeftMainView>
  );
}

export default LeftMainView;
