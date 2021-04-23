import React, { useState } from 'react';
import Button from 'shared/Button/Button';
import { AuthStyle } from './Auth.css';
import Login from './Login';

function Auth(): JSX.Element {
    const [isOpened, setIsOpened] = useState(false);

    const handleLogin = () => {
        setIsOpened((prev) => !prev);
    };

    return (
        <AuthStyle>
            <Login isOpened={isOpened} shortcut />
            <Button fill click={handleLogin}>
                Login
            </Button>
            <Button>Sign up</Button>
        </AuthStyle>
    );
}

export default Auth;
