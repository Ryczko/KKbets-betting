import React, { useState } from 'react';
import Button from 'shared/Button/Button';
import { AuthStyle } from './Auth.css';
import Login from './Login';

function Auth(): JSX.Element {
    const [isOpened, setIsOpened] = useState(false);

    const handleLogin = () => {
        setIsOpened((prev) => !prev);
        if (!isOpened) {
            document.addEventListener(
                'click',
                () => {
                    setIsOpened(false);
                },
                {
                    once: true,
                    capture: true
                }
            );
        }
    };

    return (
        <AuthStyle>
            <Login isOpened={isOpened} shortcut />
            <Button click={handleLogin}>Login / Sign up</Button>
        </AuthStyle>
    );
}

export default Auth;
