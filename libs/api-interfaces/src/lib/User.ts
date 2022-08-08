import * as mongoose from 'mongoose';
import { IBadgeFrontend } from './Badge';

interface IUserShared {
  username: string;
  email: string;
  points: number;
  googleId?: string;
  admin?: boolean;
  avatarUrl: string;
  showAvatar: boolean;
  bonusDate: Date;
  createdDate: Date;
}

export interface IUserFrontend extends IUserShared {
  _id: string;
  badges?: IBadgeFrontend[];
}

export interface IUserBackend extends IUserShared {
  badges: mongoose.Schema.Types.ObjectId[];
  generateAuthToken: () => string;
}
