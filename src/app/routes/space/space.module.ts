import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceRoutingModule } from './space-routing.module';
import { SpaceComponent } from './space/space.component';

@NgModule({
  imports: [
    CommonModule,
    SpaceRoutingModule
  ],
  declarations: [SpaceComponent]
})
export class SpaceModule { }
