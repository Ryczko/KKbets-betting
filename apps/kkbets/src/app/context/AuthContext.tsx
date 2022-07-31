import { IUserFrontend } from '@kkbets/api-interfaces';
import { createContext, useEffect, useState } from 'react';
import axiosConfig from '../utilities/axiosConfig';

interface IAuthContext {
  isLogged: boolean;
  setIsLogged: (atr: boolean) => void;
  isUserDataLoaded: boolean;
  userData: IUserFrontend;
  setUserData: (atr: IUserFrontend) => void;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [isUserDataLoaded, setIsUserDataLoaded] = useState<boolean>(false);
  const [userData, setUserData] = useState<IUserFrontend>({} as IUserFrontend);

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
    <AuthContext.Provider value={{ isLogged, setIsLogged, userData, setUserData, isUserDataLoaded }}>
      {children}
    </AuthContext.Provider>
  );
};
