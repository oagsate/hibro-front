import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpaceComponent } from './space/space.component';



const routes: Routes = [
  {
    path: '',
    component: SpaceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpaceRoutingModule { }
