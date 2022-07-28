import React from 'react';
import { IBadge } from '../types/Badge.model';

export interface IUser {
  points?: number;
  username?: string;
  email?: string;
  avatarUrl?: string;
  showAvatar?: boolean;
  admin?: boolean;
  bonusDate?: Date;
  _id?: string;
  badges?: IBadge[];
}

interface IAuthContextProps {
  isLogged: boolean;
  setIsLogged: (atr: boolean) => void;
  isUserDataLoaded: boolean;
  userData: IUser;
  setUserData: (atr: IUser) => void;
}

export const AuthContext = React.createContext({} as IAuthContextProps);
