import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FixtureApiResponse, FixtureResponse } from 'src/app/model/fixture.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  resultData: FixtureResponse[] = [];
  constructor(private apiService: ApiService, private router: Router) {

  }
  ngOnInit(): void {
    this.getResultData();
    this.resultData = JSON.parse(localStorage.getItem('gameResultData') || '[]');
  }

  getResultData() {
    this.apiService.getResults().subscribe(
      (data: FixtureApiResponse) => {
        if (data?.errors.length > 0) {
          console.log(data?.errors);
        }
        else {
        this.resultData = data.response;
        console.log(this.resultData);
        localStorage.setItem('gameResultData', JSON.stringify(this.resultData));
        }
      }
    )
  }

  goBack(){
    this.router.navigateByUrl("/");
  }
}
