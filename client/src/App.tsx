import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './index.css';
import { theme } from './utilis/theme';
import { BrowserRouter } from 'react-router-dom';
import TopNavigation from './components/Navigations/TopNavigation/TopNavigation';

function App(): JSX.Element {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <GlobalStyles />
                <TopNavigation />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
