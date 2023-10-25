import { League } from "./league.model";

export interface ApiResponse {
    get: string;
    parameters: Param;
    errors: string[];
    results: number;
    paging: Paging;
    response: FootballApiResponse[];
}

export interface Param {
    country: string;
    season: string;
}

export interface Paging {
    current: number;
    total: number;
}

export interface FootballApiResponse {
    league: League;
}

