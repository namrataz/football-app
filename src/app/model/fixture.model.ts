import { Paging } from "./api.response";

export interface FixtureApiResponse {
    get: string;
    parameters: FixtureParam;
    errors: string[];
    results: number;
    paging: Paging;
    response: FixtureResponse[];
}

export interface FixtureResponse {
    fixture: FixtureModel;
    league: FixtureLeague;
    teams: Teams;
    goals: FixtureGoals;
    score: Score;
}

export interface Score {
    halftime: FixtureGoals;
    fulltime: Fulltime;
    extratime: Fulltime;
    penalty: Fulltime;
}

export interface Fulltime {
    home?: number;
    away?: number;
}

export interface FixtureGoals {
    home: number;
    away: number;
}

export interface Teams {
    home: Home;
    away: Home;
}

export interface Home {
    id: number;
    name: string;
    logo: string;
    winner: string;
}

export interface FixtureLeague {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
    round: string;
}

export interface FixtureModel {
  id: number;
  referee?: string;
  timezone: string;
  date: string;
  timestamp: string;
  periods: Periods;
  venue: Venue;
  status: Status;
}

export interface Status {
    long: string;
    short: string;
    elapsed: number;
}

export interface Venue {
    id: number;
    name: string;
    city: string;
}

export interface Periods {
    first: number;
    second?: number;
}

export interface FixtureParam {
    live: string;
}