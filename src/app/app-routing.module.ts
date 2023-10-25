import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResultsComponent } from './components/results/results.component';

const routes: Routes = [
  { path: '', redirectTo:'/englandSelect', pathMatch: 'full'},
  { path: 'englandSelect', component: DashboardComponent},
  { path: 'spainSelect', component: DashboardComponent},
  { path: 'germanySelect', component: DashboardComponent},
  { path: 'franceSelect', component: DashboardComponent},
  { path: 'italySelect', component: DashboardComponent},
  { path: 'results', component: ResultsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
