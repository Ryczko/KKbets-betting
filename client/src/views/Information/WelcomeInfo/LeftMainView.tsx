import { StyledLeftMainView } from './LeftMainView.css';
import Trophe from './Trophe';

function LeftMainView(): JSX.Element {
    return (
        <StyledLeftMainView>
            <h3 className="title">Bet Champions league now!</h3>
            <Trophe />
            <p className="description">
                New Chempions league season already started. Don't waste your time, and bet. Unique badges await the
                best!
            </p>
        </StyledLeftMainView>
    );
}

export default LeftMainView;
