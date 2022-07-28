import GlobalStyles from '../index.css';
import './fontello/css/fontello.css';
import { BrowserRouter } from 'react-router-dom';

import React, { useEffect, useState } from 'react';

import MainViewWrapper from './views/MainViewWrapper';
import { AuthContext, IUser } from './context/AuthContext';
import axiosConfig from './utilities/axiosConfig';

export const App = () => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [isUserDataLoaded, setIsUserDataLoaded] = useState<boolean>(false);
  const [userData, setUserData] = useState<IUser>({});

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    await axiosConfig
      .get('/me', {
        headers: {
          'Cache-Control': 'no-cache',
        },
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
    <AuthContext.Provider
      value={{ isLogged, setIsLogged, userData, setUserData, isUserDataLoaded }}
    >
      <BrowserRouter>
        <GlobalStyles />
        <MainViewWrapper />
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
