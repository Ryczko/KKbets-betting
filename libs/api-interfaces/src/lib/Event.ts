import * as mongoose from 'mongoose';
import { ICategoryFrontend } from './Category';
import { ITeamFrontend } from './Team';

interface IEventShared {
  date: Date;
  important: boolean;
  ended: boolean;
  teamHomeScore: number;
  teamAwayScore: number;
  courseHomeWin: number;
  courseAwayWin: number;
  courseDraw: number;
}

export interface IEventFrontend extends IEventShared {
  _id: string;
  category: ICategoryFrontend;
  teamHome: ITeamFrontend;
  teamAway: ITeamFrontend;
}

export interface IEventBackend extends IEventShared {
  teamHome: mongoose.Schema.Types.ObjectId;
  teamAway: mongoose.Schema.Types.ObjectId;
  category: mongoose.Schema.Types.ObjectId;
  otherCourses: unknown;
}
