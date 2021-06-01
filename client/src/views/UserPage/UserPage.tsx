import { StyledUserPage } from './UserPage.css';
import Avatar from 'components/User/Avatar';
import Input from 'shared/Input/Input';
import React, { FormEvent, useContext, useEffect, useState } from 'react';
import { AuthContext } from 'context/AuthContext';
import Button from 'shared/Button/Button';
import { useHistory } from 'react-router-dom';
import { FormControlLabel, Switch } from '@material-ui/core';
import withAlert, { WithAlertProps } from 'Hoc/withAlert';
import Loader from 'shared/Spinner/Loader';
import axiosConfig from 'utilities/axiosConfig';
import AuthRequired from 'shared/AuthRequired/AuthRequired';

function UserPage(props: WithAlertProps): JSX.Element {
    const { userData, setIsLogged, setUserData, isLogged, isUserDataLoaded } = useContext(AuthContext);
    const history = useHistory();

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
        history.push('/');
        setIsLogged(false);
        setUserData({});
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
            setUserData({ ...userData, showAvatar: res.data.showAvatar, username: res.data.username });
            props.setIsSuccessOpened(true);
        } catch (err) {
            props.setError(err.response.data);
            props.setIsErrorOpened(true);
        }
    };

    if (isUserDataLoaded)
        return (
            <>
                {!isLogged ? (
                    <AuthRequired />
                ) : (
                    <StyledUserPage>
                        <div className="user-profile">
                            <div className="avatar-box">
                                <Avatar src={userData.showAvatar ? userData.avatarUrl : ''} width="90px" />
                            </div>
                            <div className="badges">
                                <h2 className="title">
                                    user badges
                                    <br />
                                    <small>(cooming soon)</small>
                                </h2>
                            </div>
                        </div>

                        <form>
                            <Input placeholder="name" onChange={handleusernameChange} value={newUsername} />
                            <FormControlLabel
                                control={
                                    <Switch
                                        color="primary"
                                        onChange={(e) => setDisplayAvatar(e.target.checked)}
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
                    </StyledUserPage>
                )}
            </>
        );
    return <Loader />;
}

export default withAlert(UserPage);
