import Auth from 'components/Auth/Auth';
import Logo from '../Logo';
import { StyledHeader } from './TopNavigation.css';

function TopNavigation(): JSX.Element {
    return (
        <StyledHeader>
            <Logo />
            <Auth />
        </StyledHeader>
    );
}

export default TopNavigation;
