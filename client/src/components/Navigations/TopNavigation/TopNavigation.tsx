import Auth from 'components/Auth/Auth';
import Avatar from 'components/User/Avatar';
import Wallet from 'components/User/Wallet';
import { AuthContext } from 'context/AuthContext';
import React, { useContext } from 'react';
import Logo from '../Logo';
import { StyledHeader } from './TopNavigation.css';

function TopNavigation(): JSX.Element {
    const { isLogged } = useContext(AuthContext);

    return (
        <StyledHeader>
            <Logo />
            {isLogged ? (
                <div className="user-data">
                    <Wallet />
                    <Avatar />
                </div>
            ) : (
                <Auth />
            )}
        </StyledHeader>
    );
}

export default TopNavigation;
