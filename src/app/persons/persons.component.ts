import { Component } from '@angular/core';
import {Person} from "./person";
import {PERSONS} from "./persons-mock";

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent {

  persons: Person[] = PERSONS;
  selectedPerson?: Person;


  onSelect(person: Person): void {
    this.selectedPerson = person;
  }

}
