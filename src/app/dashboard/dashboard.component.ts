import { Component } from '@angular/core';
import {Person} from "../persons/person";
import {PersonService} from "../person.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  persons: Person[];

  constructor(private personService: PersonService) {
    this.persons = [];
  }

  ngOnInit(): void {
    this.getPersons();
  }

  getPersons(): void {
    this.personService.readPersons().subscribe(persons => this.persons = persons.slice(1, 5));
  }

}
