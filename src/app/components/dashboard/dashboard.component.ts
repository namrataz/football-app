import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiResponse } from 'src/app/model/api.response';
import { Country } from 'src/app/model/country.model';
import { Standing } from 'src/app/model/league.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  countryId: number = 39;
  countryLabel: string = 'englandSelect';
  standingData: Standing[] = [];

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.getCountryId();
    this.getStanding();
    this.standingData = JSON.parse(localStorage.getItem('standingData') || '[]');
  }

  getCountryId() {
    const path = this.activatedRoute.snapshot.routeConfig?.path?.toString();
    const country = this.apiService.getCountries()
      .filter(
        country => country.label === path
      );
    this.countryId = country[0].id;
  }

  getStanding() {
    this.apiService.getCurrentSeasonStandings(this.countryId)
      .subscribe(
        (data: ApiResponse) => {
          if (data?.errors.length > 0) {
            console.log(data?.errors);
          }
          else {
            this.standingData = data.response[0]?.league?.standings[0];
            console.log(this.standingData);
            localStorage.setItem('standingData', JSON.stringify(this.standingData));
          }
        });
  }

  onSelectTeamName(id: number) {
    this.apiService.setSelectedTeamNumber(id);
  }
}
