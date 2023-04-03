import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PersonsComponent} from "./persons/persons.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {PersonDetailsComponent} from "./person-details/person-details.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'persons', component: PersonsComponent },
  { path: 'person-details/:id', component: PersonDetailsComponent }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
