    export interface Filters {
        status: string[];
    }

    export interface Area {
        id: number;
        name: string;
    }

    export interface Competition {
        id: number;
        area: Area;
        name: string;
        code: string;
        plan: string;
        lastUpdated: Date;
    }

    export interface Season {
        id: number;
        startDate: string;
        endDate: string;
        currentMatchday: number;
    }

    export interface Odds {
        msg: string;
    }

    export interface FullTime {
        homeTeam: number;
        awayTeam: number;
    }

    export interface HalfTime {
        homeTeam: number;
        awayTeam: number;
    }

    export interface ExtraTime {
        homeTeam?: any;
        awayTeam?: any;
    }

    export interface Penalties {
        homeTeam?: any;
        awayTeam?: any;
    }

    export interface Score {
        winner: string;
        duration: string;
        fullTime: FullTime;
        halfTime: HalfTime;
        extraTime: ExtraTime;
        penalties: Penalties;
    }

    export interface HomeTeam {
        id: number;
        name: string;
    }

    export interface AwayTeam {
        id: number;
        name: string;
    }

    export interface Referee {
        id: number;
        name: string;
        nationality?: any;
    }

    export interface Match {
        id: number;
        season: Season;
        utcDate: Date;
        status: string;
        matchday: number;
        stage: string;
        group: string;
        lastUpdated: Date;
        odds: Odds;
        score: Score;
        homeTeam: HomeTeam;
        awayTeam: AwayTeam;
        referees: Referee[];
    }

    export class Resultats {
        count: number;
        filters: Filters;
        competition: Competition;
        matches: Match[];
    }
