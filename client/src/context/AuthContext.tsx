import React from 'react';

export interface UserType {
    points?: number;
    username?: string;
    email?: string;
}

export const AuthContext = React.createContext<{
    isLogged: boolean;
    setIsLogged: (atr: boolean) => void;
    userData: UserType;
    setUserData: (atr: UserType) => void;
}>({
    isLogged: false,
    setIsLogged: () => undefined,
    userData: { points: 0, username: '', email: '' },
    setUserData: () => ({
        points: 0
    })
});
