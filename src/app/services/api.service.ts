import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environment';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/api.response';
import { countryList } from '../mock.country.list';
import { FixtureApiResponse } from '../model/fixture.model';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  teamId: number = 40;
  leagueId: number = 39;
  currentYear = new Date().getFullYear();

  constructor(private http: HttpClient) { }

  getCountries() {
    return countryList;
  }

  getCurrentSeasonStandings(leagueId: number): Observable<ApiResponse> {
    const url = environment.resources.leagueDataUrl + `?league=${leagueId}&season=${this.currentYear}`;
    const headers = new HttpHeaders({
      'x-rapidapi-key': environment.api.key
    });
    return this.http.get<ApiResponse>(url, { headers });
  }

  getResults(): Observable<FixtureApiResponse> {
    const url = environment.resources.fixturesUrl + `?league=${this.leagueId}&season=${this.currentYear}&team=${this.teamId}`;
    const headers = new HttpHeaders({
      'x-rapidapi-key': environment.api.key
    });
    return this.http.get<FixtureApiResponse>(url, { headers });
  }

  setSelectedTeamNumber(id: number) {
    this.teamId = id;
  }

  setLeagueIdNumber(id: number) {
    this.leagueId = id;
  }
}
