import {Injectable} from '@angular/core';
import {Person} from "./persons/person";
import {Observable} from "rxjs";
import {MessageService} from "./message.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private httpClient: HttpClient, private messageService: MessageService) {
  }

  readPersons(): Observable<Person[]> {
    const persons: Observable<Person[]> = this.httpClient.get<Person[]>('/api/persons');
    this.messageService.add('PersonService: Fetched persons successfully.');

    return persons;
  }

  readPerson(id: number): Observable<Person> {
    const person: Observable<Person> = this.httpClient.get<Person>('/api/persons/' + id);
    this.messageService.add(`PersonService: Fetch person for ID ${id}`);

    return person;
  }

}
