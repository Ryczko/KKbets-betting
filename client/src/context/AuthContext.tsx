import React from 'react';

export interface UserType {
    points: number;
}

export const AuthContext = React.createContext<{
    isLogged: boolean;
    setIsLogged: (atr: boolean) => void;
    userData: UserType;
    setUserData: (atr: UserType) => void;
}>({
    isLogged: false,
    setIsLogged: () => undefined,
    userData: { points: 0 },
    setUserData: () => ({
        points: 0
    })
});
