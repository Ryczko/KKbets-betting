import { FormControlLabel, Switch } from '@mui/material';
import Input from '../../../../components/Input/Input';
import Button from '../../../../components/Button/Button';
import { StyledUserSettings } from './UserSettings.css';
import withAlert, { WithAlertProps } from '../../../../Hoc/withAlert';
import { FormEvent, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../context/AuthContext';
import axiosConfig from '../../../../utilities/axiosConfig';
import { useNavigate } from 'react-router-dom';

function UserSettings(props: WithAlertProps) {
  const { userData, setUserData } = useContext(AuthContext);
  const navigate = useNavigate();

  const [newUsername, setNewUsername] = useState('');
  const [displayAvatar, setDisplayAvatar] = useState(false);

  const handleusernameChange = (val: string): void => {
    setNewUsername(val);
  };

  useEffect(() => {
    setNewUsername(userData.username || '');
    setDisplayAvatar(userData.showAvatar || false);
  }, [userData.username, userData.showAvatar]);

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
      navigate('/users/' + res.data.username);
    } catch (err) {
      props.setError(err.response.data);
      props.setIsErrorOpened(true);
    }
  };

  const cancelHandler = (e: FormEvent<EventTarget>) => {
    e.preventDefault();
    navigate('/users/' + userData.username);
  };

  return (
    <StyledUserSettings>
      <h2>Change your profile settings</h2>
      <form>
        <Input placeholder="name" onChange={handleusernameChange} value={newUsername} />
        <FormControlLabel
          control={
            <Switch color="primary" onChange={(e: any) => setDisplayAvatar(e.target.checked)} checked={displayAvatar} />
          }
          label="Display Google avatar"
        />
        <br />
        <Button click={(e) => saveHandler(e)} fill style={{ marginTop: '20px', width: '90px' }}>
          Save
        </Button>
        <Button click={cancelHandler}>Cancel</Button>
      </form>
    </StyledUserSettings>
  );
}
export default withAlert(UserSettings);
