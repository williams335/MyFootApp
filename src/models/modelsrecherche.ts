export interface Filters {
        areas: number[];
        permission: string;
    }

    export interface Area {
        id: number;
        name: string;
    }

    export interface Team {
        id: number;
        area: Area;
        name: string;
        shortName: string;
        tla: string;
        crestUrl: string;
        address: string;
        phone: string;
        website: string;
        email: string;
        founded?: number;
        clubColors: string;
        venue: string;
        lastUpdated: Date;
    }

    export class Recherche {
        count: number;
        filters: Filters;
        teams: Team[];
    }


