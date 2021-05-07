import { ThemeProvider } from 'styled-components';
import GlobalStyles from './index.css';
import 'fontello/css/fontello.css';
import { theme } from './utilities/theme';
import { BrowserRouter } from 'react-router-dom';
import MainViewWrapper from 'views/MainViewWrapper';

import { useEffect, useState } from 'react';
import { AuthContext, UserType } from 'context/AuthContext';
import axios from 'axios';
import { BACKEND_URL } from 'utilities/connection';

function App(): JSX.Element {
    const [isLogged, setIsLogged] = useState<boolean>(false);
    const [userData, setUserData] = useState<UserType>({ points: 0, username: '', email: '' });

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        await axios
            .get(BACKEND_URL + '/me', { withCredentials: true })
            .then((res) => {
                if (res.status === 200) {
                    setUserData(res.data);
                    setIsLogged(true);
                } else {
                    setIsLogged(false);
                }
            })
            .catch(() => {
                setIsLogged(false);
            });
    };
    return (
        <ThemeProvider theme={theme}>
            <AuthContext.Provider value={{ isLogged, setIsLogged, userData, setUserData }}>
                <BrowserRouter>
                    <GlobalStyles />
                    <MainViewWrapper />
                </BrowserRouter>
            </AuthContext.Provider>
        </ThemeProvider>
    );
}

export default App;
