import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceRoutingModule } from './space-routing.module';
import { SpaceComponent } from './space/space.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SpaceRoutingModule,
    SharedModule
  ],
  declarations: [SpaceComponent]
})
export class SpaceModule { }
