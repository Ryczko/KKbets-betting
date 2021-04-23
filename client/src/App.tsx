import { ThemeProvider } from 'styled-components';
import GlobalStyles from './index.css';
import 'fontello/css/fontello.css';
import { theme } from './utilities/theme';
import { BrowserRouter } from 'react-router-dom';
import MainViewWrapper from 'views/MainViewWrapper';

import { useEffect, useState } from 'react';
import { AuthContext } from 'context/AuthContext';
import axios from 'axios';
import { BACKEND_URL } from 'utilities/connection';

function App(): JSX.Element {
    const [isLogged, setIsLogged] = useState<boolean>(false);

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        const result = await axios
            .get(BACKEND_URL + '/me', { withCredentials: true })
            .then((res) => {
                if (res.status === 200) {
                    console.log('true');
                    setIsLogged(true);
                } else {
                    console.log('false');

                    setIsLogged(false);
                }
            })
            .catch((err) => {
                console.log('false');
                setIsLogged(false);
            });
    };
    return (
        <ThemeProvider theme={theme}>
            <AuthContext.Provider value={{ isLogged, setIsLogged }}>
                <BrowserRouter>
                    <GlobalStyles />
                    <MainViewWrapper />
                </BrowserRouter>
            </AuthContext.Provider>
        </ThemeProvider>
    );
}

export default App;
