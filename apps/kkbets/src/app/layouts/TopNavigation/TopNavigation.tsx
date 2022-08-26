import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Auth from '../../components/Auth/Auth';

import Logo from '../../components/Logo/Logo';
import { StyledHeader } from './TopNavigation.css';
import Avatar from '../../components/Avatar/Avatar';
import Currency from '../../components/Currency/Currency';
import i18n from '../../libs/i18n/i18n';
import Button from '../../components/Button/Button';

function TopNavigation(): JSX.Element {
  const { isLogged, userData } = useContext(AuthContext);

  const changeLanguage = (): void => {
    const language = i18n.language === 'en' ? 'pl' : 'en';
    localStorage.setItem('language', language);
    i18n.changeLanguage(language);
  };

  return (
    <StyledHeader>
      <div className="left">
        <Logo />
        <Button click={changeLanguage}>change language</Button>
      </div>
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
