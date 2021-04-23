import React from 'react';

export const AuthContext = React.createContext<{ isLogged: boolean; setIsLogged: (atr: boolean) => void }>({
    isLogged: false,
    setIsLogged: () => undefined
});
