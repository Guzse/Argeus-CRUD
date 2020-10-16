import { PersonService, IPerson } from './../person.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-table',
  templateUrl: './person-table.component.html',
  styleUrls: ['./person-table.component.scss'],
})
export class PersonTableComponent implements OnInit {
  persons: IPerson[];
  constructor(private personService: PersonService) {}
  ngOnInit(): void {
    this.personService.getPersons().subscribe((data: IPerson[]) => {
      console.log(data);
      data.sort((a, b) => (a.id > b.id ? 1 : -1));
      this.persons = data;
    });
  }

  deletePerson(id:number) {
	  console.log(id)
	this.personService.deletePerson(id).subscribe();
  }
}
