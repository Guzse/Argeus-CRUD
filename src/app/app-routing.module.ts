import { AddPersonComponent } from './add-person/add-person.component';
import { PersonTableComponent } from './person-table/person-table.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: PersonTableComponent },
  { path: 'add-person', component: AddPersonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
