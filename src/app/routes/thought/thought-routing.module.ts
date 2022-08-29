import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThoughtComponent } from './thought/thought.component';



const routes: Routes = [
  {
    path: '',
    component: ThoughtComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThoughtRoutingModule { }
