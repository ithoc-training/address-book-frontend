import {Component} from '@angular/core';
import {Person} from "./person";
import {PersonService} from "../person.service";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent {

  persons: Person[];

  constructor(private personService: PersonService, private messageService: MessageService) {
    this.persons = [];
  }

  ngOnInit(): void {
    this.getPersons();
  }

  getPersons(): void {
    this.personService.readPersons().subscribe(persons => this.persons = persons);
  }

  addPerson(firstName: string, lastName: string): void {
    firstName = firstName.trim();
    lastName = lastName.trim();
    if (!firstName || !lastName) { return; }

    const person = { firstName, lastName } as Person
    this.personService.createPerson(person).subscribe(() => this.getPersons());
  }

  deletePerson(person: Person): void {
    this.personService.deletePerson(person).subscribe(() => this.getPersons());
    this.messageService.add(`PersonService: Deleted person ${person.id}`)
  }

}
