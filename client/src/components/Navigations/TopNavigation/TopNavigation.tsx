import Auth from 'components/Auth/Auth';
import Avatar from 'components/User/Avatar';
import Wallet from 'components/User/Wallet';
import { AuthContext } from 'context/AuthContext';
import React, { useContext } from 'react';
import Logo from '../Logo';
import { StyledHeader } from './TopNavigation.css';

function TopNavigation(): JSX.Element {
    const { isLogged, userData } = useContext(AuthContext);

    return (
        <StyledHeader>
            <Logo />
            {isLogged ? (
                <div className="user-data">
                    <Wallet />
                    <Avatar
                        src={userData.showAvatar ? userData.avatarUrl : ''}
                        className="display-above-sm"
                        width="45px"
                    />
                </div>
            ) : (
                <Auth />
            )}
        </StyledHeader>
    );
}

export default TopNavigation;
