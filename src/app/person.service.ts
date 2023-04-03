import {Injectable} from '@angular/core';
import {Person} from "./persons/person";
import {PERSONS} from "./persons/persons-mock";
import {Observable, of} from "rxjs";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private messageService: MessageService) {
  }

  readPersons(): Observable<Person[]> {
    const persons: Observable<Person[]> = of(PERSONS);
    this.messageService.add('PersonService: Fetched persons successfully.');

    return persons;
  }

  readPerson(id: number): Observable<Person> {
    // Exclamation mark says we always expect a person to be found.
    const person = PERSONS.find(person => person.id === id)!; // This will be replaced by backend API call.
    this.messageService.add(`PersonService: Fetch person for ID ${id}`);

    return of(person);
  }

}
