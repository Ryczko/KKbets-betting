import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Auth from '../../components/Auth/Auth';

import Logo from '../../components/Logo/Logo';
import { StyledHeader } from './TopNavigation.css';
import Avatar from '../../components/Avatar/Avatar';
import Currency from '../../components/Currency/Currency';

function TopNavigation(): JSX.Element {
  const { isLogged, userData } = useContext(AuthContext);

  return (
    <StyledHeader>
      <Logo />
      {isLogged ? (
        <div className="user-data">
          <Currency value={userData.points} />
          <Avatar
            username={userData.username}
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
