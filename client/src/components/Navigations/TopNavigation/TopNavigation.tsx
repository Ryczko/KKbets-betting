import Auth from 'components/Auth/Auth';
import { AuthContext } from 'context/AuthContext';
import { useContext } from 'react';
import Logo from '../Logo';
import { StyledHeader } from './TopNavigation.css';

function TopNavigation(): JSX.Element {
    const { isLogged, setIsLogged } = useContext(AuthContext);

    return (
        <StyledHeader>
            <Logo />
            {isLogged ? 'Logged' : <Auth />}
        </StyledHeader>
    );
}

export default TopNavigation;
