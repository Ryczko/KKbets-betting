import { IUserFrontend } from '@kkbets/api-interfaces';
import { FormControlLabel, Switch } from '@mui/material';
import { FormEvent, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import withAlert, { WithAlertProps } from '../../../Hoc/withAlert';
import AuthRequired from '../../../components/AuthRequired/AuthRequired';
import Avatar from '../../../components/Avatar/Avatar';
import Badge from '../../../components/Badge/Badge';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import Loader from '../../../components/Loader/Loader';
import axiosConfig from '../../../utilities/axiosConfig';
import { StyledUserData } from './UserData.css';
import withProtectedRoute from '../../../Hoc/withProtectedRoute';
import LoaderWrapper from '../../../wrappers/LoaderWrapper';

function UserData(props: WithAlertProps) {
  const { userData, setIsLogged, setUserData, isLogged, isUserDataLoaded } = useContext(AuthContext);
  const navigate = useNavigate();

  const [newUsername, setNewUsername] = useState('');
  const [displayAvatar, setDisplayAvatar] = useState(false);

  useEffect(() => {
    setNewUsername(userData.username || '');
    setDisplayAvatar(userData.showAvatar || false);
  }, [userData.username, userData.showAvatar]);

  const logoutHandler = (e: FormEvent<EventTarget>) => {
    e.preventDefault();
    const date = new Date();
    date.setDate(date.getDate() - 1);
    document.cookie = `jwt= ; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    navigate('/');
    setIsLogged(false);
    setUserData({} as IUserFrontend);
  };

  const handleusernameChange = (val: string): void => {
    setNewUsername(val);
  };

  const saveHandler = async (e: FormEvent<EventTarget>) => {
    e.preventDefault();
    props.setIsSuccessOpened(false);
    props.setIsErrorOpened(false);
    try {
      const res = await axiosConfig.patch('/users', {
        username: newUsername,
        showAvatar: displayAvatar
      });
      setUserData({
        ...userData,
        showAvatar: res.data.showAvatar,
        username: res.data.username
      });
      props.setIsSuccessOpened(true);
    } catch (err) {
      props.setError(err.response.data);
      props.setIsErrorOpened(true);
    }
  };

  return (
    <LoaderWrapper isLoading={!isUserDataLoaded}>
      <StyledUserData>
        <div className="user-profile">
          <div className="avatar-box">
            <Avatar src={userData.showAvatar ? userData.avatarUrl : ''} width="90px" />
          </div>
          <div className="badges">
            {userData.badges && userData.badges?.length > 0 ? (
              userData.badges?.map((badge) => (
                <Badge key={badge.name} name={badge.name} description={badge.description} src={badge.image} />
              ))
            ) : (
              <h3 className="title">User currently has no badge</h3>
            )}
          </div>
        </div>

        <form>
          <Input placeholder="name" onChange={handleusernameChange} value={newUsername} />
          <FormControlLabel
            control={
              <Switch
                color="primary"
                onChange={(e: any) => setDisplayAvatar(e.target.checked)}
                checked={displayAvatar}
              />
            }
            label="Display Google avatar"
          />
          <br />
          <Button click={(e) => saveHandler(e)} fill style={{ marginTop: '20px', width: '90px' }}>
            Save
          </Button>

          <Button click={(e) => logoutHandler(e)} style={{ marginTop: '10px', width: '90px' }}>
            Logout
          </Button>
        </form>
      </StyledUserData>
    </LoaderWrapper>
  );
}

export default withProtectedRoute(withAlert(UserData));
