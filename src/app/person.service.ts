import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor(private http: HttpClient) {}
  URL = 'http://localhost:8085/persons';

  getPersons() {
    return this.http.get(this.URL);
  }

  getPerson(id: number) {
    return this.http.get(`${this.URL}/${id}`);
  }

  deletePerson(id: number) {
    return this.http.delete(`${this.URL}/${id}`);
  }

  postPerson(person) {
    return this.http.post(this.URL, person);
  }
}
