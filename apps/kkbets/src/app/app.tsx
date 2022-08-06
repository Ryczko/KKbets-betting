import GlobalStyles from '../index.css';
import './fontello/css/fontello.css';
import { BrowserRouter } from 'react-router-dom';

import { AuthContextProvider } from './context/AuthContext';
import PageContainer from './layouts/PageContainer/PageContainer';

export const App = () => {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <GlobalStyles />
        <PageContainer />
      </BrowserRouter>
    </AuthContextProvider>
  );
};

export default App;
