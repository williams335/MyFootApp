    export interface Filters {
        limit: number;
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
        winner?: any;
    }

    export interface Player {
        id: number;
        name: string;
        firstName: string;
        lastName?: any;
        dateOfBirth: string;
        countryOfBirth: string;
        nationality: string;
        position: string;
        shirtNumber?: number;
        lastUpdated: Date;
    }

    export interface Team {
        id: number;
        name: string;
    }

    export interface Scorer {
        player: Player;
        team: Team;
        numberOfGoals: number;
    }

    export class Buteurs {
        count: number;
        filters: Filters;
        competition: Competition;
        season: Season;
        scorers: Scorer[];
    }

