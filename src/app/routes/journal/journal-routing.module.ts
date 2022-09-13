import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JournalComponent } from './journal/journal.component';

export enum JournalPageMode {
  Create,
  Read,
  Edit,
}

const routes: Routes = [
  {
    path: '',
    component: JournalComponent,
    data: {
      mode: JournalPageMode.Create,
    },
  },
  {
    path: ':id',
    component: JournalComponent,
    data: {
      mode: JournalPageMode.Read,
    },
  },
  {
    path: ':id/edit',
    component: JournalComponent,
    data: {
      mode: JournalPageMode.Edit,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JournalRoutingModule {}
