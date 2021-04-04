import { ThemeProvider } from 'styled-components';
import GlobalStyles from './index.css';
import 'fontello/css/fontello.css';
import { theme } from './utilis/theme';
import { BrowserRouter } from 'react-router-dom';
import TopNavigation from './components/Navigations/TopNavigation/TopNavigation';
import LeftNavigation from 'components/Navigations/LeftNavigation/LeftNavigation';

function App(): JSX.Element {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <GlobalStyles />
                <TopNavigation />
                <div className="icon-chat"></div>
                <LeftNavigation />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
