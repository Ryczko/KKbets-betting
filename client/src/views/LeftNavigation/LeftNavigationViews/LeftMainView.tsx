import { StyledLeftMainView } from './LeftMainView.css';
import trophe from 'assets/images/trophe.svg';

function LeftMainView(): JSX.Element {
    return (
        <StyledLeftMainView>
            <h3 className="title">Bet Champions league now!</h3>
            <img src={trophe} alt="trophe" className="trophe" />
            <p className="description">
                New Chempions league season already started. Don't waste your time, and place. Unique badges and cash
                prizes await the best!
            </p>
        </StyledLeftMainView>
    );
}

export default LeftMainView;
