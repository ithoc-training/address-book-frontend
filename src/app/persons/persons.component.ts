import { Component } from '@angular/core';
import {Person} from "./person";

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent {

  person: Person = {
    id: 1,
    name: 'Oli Hock'
  };

}
