import GlobalStyles from '../index.css';
import './fontello/css/fontello.css';
import { BrowserRouter } from 'react-router-dom';

import React, { useEffect, useState } from 'react';

import MainViewWrapper from './views/MainViewWrapper';
import { AuthContextProvider } from './context/AuthContext';

export const App = () => {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <GlobalStyles />
        <MainViewWrapper />
      </BrowserRouter>
    </AuthContextProvider>
  );
};

export default App;
