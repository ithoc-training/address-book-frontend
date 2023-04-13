import {Injectable} from '@angular/core';
import {Person} from "./persons/person";
import {Observable} from "rxjs";
import {MessageService} from "./message.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  url: string = 'http://localhost:7080/api/persons';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient, private messageService: MessageService) {
  }

  readPersons(): Observable<Person[]> {
    const persons: Observable<Person[]> = this.httpClient.get<Person[]>(this.url);
    this.messageService.add('PersonService: Fetched persons successfully.');

    return persons;
  }

  readPerson(id: number): Observable<Person> {
    const person: Observable<Person> = this.httpClient.get<Person>(this.url + '/' + id);
    this.messageService.add(`PersonService: Fetched person for ID ${id}`);

    return person;
  }

  updatePerson(person: Person): Observable<any> {
    const updatedPerson: Observable<any> = this.httpClient.put(this.url, person, this.httpOptions);
    this.messageService.add(`PersonService: Updated person: ${person}`);

    return updatedPerson;
  }

  createPerson(person: Person): Observable<Person> {
    const createdPerson: Observable<Person> = this.httpClient.post<Person>(this.url, person, this.httpOptions);
    this.messageService.add(`PersonService: Created person: ${createdPerson}`);

    return createdPerson;
  }

  deletePerson(person: Person): Observable<any> {
    const deletedPerson: Observable<any> = this.httpClient.delete(this.url + '/' + person.id);
    this.messageService.add(`PersonService: Deleted person ${person.id}`);

    return deletedPerson;
  }
}
