import GlobalStyles from './index.css';
import 'fontello/css/fontello.css';
import { BrowserRouter } from 'react-router-dom';
import MainViewWrapper from 'views/MainViewWrapper';

import React, { useEffect, useState } from 'react';
import { AuthContext, IUser } from 'context/AuthContext';

import axiosConfig from 'utilities/axiosConfig';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { useTheme } from 'styled-components';

function App(): JSX.Element {
    const [isLogged, setIsLogged] = useState<boolean>(false);
    const [isUserDataLoaded, setIsUserDataLoaded] = useState<boolean>(false);
    const [userData, setUserData] = useState<IUser>({});

    const theme = useTheme();

    const UItheme = createMuiTheme({
        palette: {
            primary: {
                main: theme.colors.accent.light
            }
        }
    });

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        await axiosConfig
            .get('/me', {
                headers: {
                    'Cache-Control': 'no-cache'
                }
            })
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
        <MuiThemeProvider theme={UItheme}>
            <AuthContext.Provider value={{ isLogged, setIsLogged, userData, setUserData, isUserDataLoaded }}>
                <BrowserRouter>
                    <GlobalStyles />
                    <MainViewWrapper />
                </BrowserRouter>
            </AuthContext.Provider>
        </MuiThemeProvider>
    );
}

export default App;
