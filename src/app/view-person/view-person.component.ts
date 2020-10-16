import { IPerson, PersonService } from './../person.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-person',
  templateUrl: './view-person.component.html',
  styleUrls: ['./view-person.component.scss'],
})
export class ViewPersonComponent implements OnInit {
  person: IPerson;
  editMode: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.personService.getPerson(params['id']).subscribe((data) => {
        this.person = data;
      });
    });
  }

  submitForm() {
    this.personService.putPerson(this.person).subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }
}
