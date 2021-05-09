import { ITeam } from './Team.model';

export interface IMatch {
    ended: boolean;
    important: boolean;
    _id: string;
    date: string;
    category: { id: string; name: string };
    courseHomeWin: number;
    courseAwayWin: number;
    courseDraw: number;
    teamHome: ITeam;
    teamAway: ITeam;
    teamHomeScore: number;
    teamAwayScore: number;
}
