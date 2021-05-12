import { StyledUserPage } from './UserPage.css';
import Avatar from 'components/User/Avatar';
import Input from 'shared/Input/Input';
import { FormEvent, useContext } from 'react';
import { AuthContext } from 'context/AuthContext';
import Button from 'shared/Button/Button';
import { useHistory } from 'react-router-dom';

function UserPage(): JSX.Element {
    const { userData, setIsLogged, setUserData } = useContext(AuthContext);
    const history = useHistory();

    const logoutHandler = (e: FormEvent<EventTarget>) => {
        e.preventDefault();
        const date = new Date();
        date.setDate(date.getDate() - 1);
        document.cookie = `jwt= ; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
        history.push('/');
        setIsLogged(false);
        setUserData({});
    };

    return (
        <StyledUserPage>
            <div className="user-profile">
                <Avatar width="90px" />
                <div className="badges">
                    <h2 className="title">
                        user badges
                        <br />
                        <small>(cooming soon)</small>
                    </h2>
                </div>
            </div>

            <form>
                <Input disabled placeholder="email" value={userData.username} />
                <Input disabled placeholder="name" value={userData.email} />
                <Button click={(e) => logoutHandler(e)} fill style={{ marginTop: '20px' }}>
                    Logout
                </Button>
            </form>
        </StyledUserPage>
    );
}

export default UserPage;
