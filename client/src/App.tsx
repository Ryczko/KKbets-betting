import { ThemeProvider } from 'styled-components';
import GlobalStyles from './index.css';
import 'fontello/css/fontello.css';
import { theme } from './utilis/theme';
import { BrowserRouter } from 'react-router-dom';
import MainViewWrapper from 'views/MainViewWrapper';

function App(): JSX.Element {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <GlobalStyles />
                <MainViewWrapper />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
