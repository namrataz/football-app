import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from 'src/app/model/country.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  countryList: Country[] | undefined;
  selectedId: number = 39;

  url: string | undefined;

  constructor(private apiService: ApiService) {
    this.getCountries();
  }

  getCountries() {
    this.countryList = this.apiService.getCountries();
  }

  setActiveMenu(id: number) {
    this.selectedId = id;
    this.apiService.setLeagueIdNumber(id);
  }

}
