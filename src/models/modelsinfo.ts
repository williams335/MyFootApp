    export interface Area {
        id: number;
        name: string;
    }

    export interface Area2 {
        id: number;
        name: string;
    }

    export interface ActiveCompetition {
        id: number;
        area: Area2;
        name: string;
        code: string;
        plan: string;
        lastUpdated: Date;
    }

    export interface Squad {
        id: number;
        name: string;
        position: string;
        dateOfBirth: Date;
        countryOfBirth: string;
        nationality: string;
        shirtNumber?: number;
        role: string;
    }

    export class Info {
        id: number;
        area: Area;
        activeCompetitions: ActiveCompetition[];
        name: string;
        shortName: string;
        tla: string;
        crestUrl: string;
        address: string;
        phone: string;
        website: string;
        email: string;
        founded: number;
        clubColors: string;
        venue: string;
        squad: Squad[];
        lastUpdated: Date;
    }