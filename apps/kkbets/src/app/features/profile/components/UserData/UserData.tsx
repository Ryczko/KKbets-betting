import { FormEvent, useContext, useEffect, useState } from 'react';

import Avatar from '../../../../components/Avatar/Avatar';

import LoaderWrapper from '../../../../wrappers/LoaderWrapper';
import { StyledUserData } from './UserData.css';
import axiosConfig from '../../../../utilities/axiosConfig';
import { IUserFrontend } from '@kkbets/api-interfaces';
import Currency from '../../../../components/Currency/Currency';
import UserBadges from '../UserBadges/UserBadges';
import Button from '../../../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthContext';

interface UserDataProps {
  username: string;
  isOwner: boolean;
}

function UserData({ username, isOwner }: UserDataProps) {
  const { setIsLogged, setUserData: setOwnerData } = useContext(AuthContext);

  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({} as IUserFrontend);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    loadUserData();
  }, [username]);

  const loadUserData = async () => {
    try {
      setLoading(true);
      setUserData({} as IUserFrontend);
      const res = await axiosConfig.get(/users/ + username);
      setUserData(res.data);
      setLoading(false);
    } catch (err) {
      navigate('/');
    }
  };

  const goToEditProfile = () => {
    navigate('/edit-profile');
  };

  const logoutHandler = (e: FormEvent<EventTarget>) => {
    e.preventDefault();
    const date = new Date();
    date.setDate(date.getDate() - 1);
    document.cookie = `jwt= ; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    navigate('/');
    setIsLogged(false);
    setOwnerData({} as IUserFrontend);
  };

  return (
    <LoaderWrapper isLoading={loading}>
      <>
        <StyledUserData>
          <div className="top">
            <div className="left">
              <Avatar username={userData.username} src={userData.avatarUrl ? userData.avatarUrl : ''} width="90px" />
            </div>
            <div className="right">
              <h2 className="username">{userData.username}</h2>

              <div className="info-line">
                <span className="highlight">Points:</span> <Currency value={userData.points} size={16} />
              </div>
              <div className="info-line">
                <span className="highlight">Member since: </span>
                {new Date(userData.createdDate).toLocaleDateString()}
              </div>
            </div>
          </div>
          {isOwner && (
            <div className="owner-buttons">
              <Button className="btn" fill click={goToEditProfile}>
                Edit profile
              </Button>
              <Button className="btn" click={(e) => logoutHandler(e)}>
                Logout
              </Button>
            </div>
          )}
        </StyledUserData>

        <UserBadges badges={userData.badges || []} />
      </>
    </LoaderWrapper>
  );
}

export default UserData;
