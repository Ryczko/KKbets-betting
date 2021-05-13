import { ThemeProvider } from 'styled-components';
import GlobalStyles from './index.css';
import 'fontello/css/fontello.css';
import { theme } from './utilities/theme';
import { BrowserRouter } from 'react-router-dom';
import MainViewWrapper from 'views/MainViewWrapper';

import { useEffect, useState } from 'react';
import { AuthContext, IUser } from 'context/AuthContext';

import axiosConfig from 'utilities/axiosConfig';

function App(): JSX.Element {
    const [isLogged, setIsLogged] = useState<boolean>(false);
    const [isUserDataLoaded, setIsUserDataLoaded] = useState<boolean>(false);
    const [userData, setUserData] = useState<IUser>({});

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        await axiosConfig
            .get('/me')
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
        setIsUserDataLoaded(true);
    };
    return (
        <ThemeProvider theme={theme}>
            <AuthContext.Provider value={{ isLogged, setIsLogged, userData, setUserData, isUserDataLoaded }}>
                <BrowserRouter>
                    <GlobalStyles />
                    <MainViewWrapper />
                </BrowserRouter>
            </AuthContext.Provider>
        </ThemeProvider>
    );
}

export default App;
