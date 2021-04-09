import { TeamType } from './Team.model';

export interface MatchType {
    ended: boolean;
    important: boolean;
    id: string;
    date: string;
    category: { id: string; name: string };
    courseHomeWin: number;
    courseAwayWin: number;
    courseDraw: number;
    teamHome: TeamType;
    teamAway: TeamType;
    teamHomeScore: number;
    teamAwayScore: number;
}
