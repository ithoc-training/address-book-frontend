import {Component, Input} from '@angular/core';
import {Person} from "../persons/person";
import {ActivatedRoute} from "@angular/router";
import {PersonService} from "../person.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent {

  person?: Person;

  constructor(
    private activatedRoute: ActivatedRoute,
    private personService: PersonService,
    private location: Location // Angular service for Browser navigation (back, forward)
  ) {
  }

  ngOnInit(): void {
    this.getPerson();
  }

  getPerson(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.personService.readPerson(id).subscribe(person => this.person = person);
  }

  savePerson(): void {
    if (this.person) {
      this.personService.updatePerson(this.person)
        .subscribe(() => this.back());
    }
  }

  back(): void {
    this.location.back();
  }

}
