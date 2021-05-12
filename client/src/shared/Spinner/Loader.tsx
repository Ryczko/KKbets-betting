import { StyledLoader } from './Loader.css';
import Ball from './Ball';

function Loader(): JSX.Element {
    return (
        <StyledLoader>
            <div className="shadow"></div>
            <div className="gravity">
                <Ball class="ball" />
            </div>
        </StyledLoader>
    );
}

export default Loader;
