import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import Auth from '../../Auth/Auth';
import Avatar from '../../User/Avatar';
import Wallet from '../../User/Wallet';
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
          <Avatar src={userData.showAvatar ? userData.avatarUrl : ''} className="display-above-sm" width="45px" />
        </div>
      ) : (
        <Auth />
      )}
    </StyledHeader>
  );
}

export default TopNavigation;
