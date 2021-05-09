import React from 'react';

export interface IUser {
    points?: number;
    username?: string;
    email?: string;
}

interface IAuthContextProps {
    isLogged: boolean;
    setIsLogged: (atr: boolean) => void;
    userData: IUser;
    setUserData: (atr: IUser) => void;
}

export const AuthContext = React.createContext({} as IAuthContextProps);
