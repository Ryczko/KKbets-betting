import { StyledLogo } from './Logo.css';
import { Link } from 'react-router-dom';

function Logo(): JSX.Element {
    return (
        <StyledLogo>
            <Link to="/">
                <span className="first-letter">K</span>
                <span className="right-logo">KKbets</span>
            </Link>
        </StyledLogo>
    );
}

export default Logo;
