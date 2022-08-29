import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThoughtRoutingModule } from './thought-routing.module';
import { ThoughtComponent } from './thought/thought.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ThoughtRoutingModule,
    SharedModule
  ],
  declarations: [ThoughtComponent]
})
export class ThoughtModule { }
