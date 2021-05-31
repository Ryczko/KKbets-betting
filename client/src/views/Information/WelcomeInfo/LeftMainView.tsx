import { StyledLeftMainView } from './LeftMainView.css';
import euroLogo from 'assets/images/euro-logo.png';

function LeftMainView(): JSX.Element {
    return (
        <StyledLeftMainView>
            <h1 className="title">Time for Euro 2020!</h1>
            <img src={euroLogo} alt="logo euro" />
            <p className="description">
                The time has come for the long-awaited euro 2020. Don't waste your time, and bet. Beat the rest of the
                players and become a football specialist!
            </p>
        </StyledLeftMainView>
    );
}

export default LeftMainView;
