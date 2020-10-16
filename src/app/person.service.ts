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
    return this.http.get<IPerson>(`${this.URL}/${id}`);
  }

  deletePerson(id: number) {
    return this.http.delete(`${this.URL}/${id}`);
  }

  postPerson(person:IPerson) {
    return this.http.post(this.URL, person);
  }
}
export interface Address {
  id: number;
  street: string;
  postcode: string;
  city: string;
  country: string;
}

export interface IPerson {
  id: number;
  name: string;
  lastName: string;
  minor: boolean;
  resident: boolean;
  email: string;
  nationalNumber: string;
  address: Address;
  birthPlace: string;
  dateOfBirth: string;
  maritalStatus: string;
  partnerName: string;
}
