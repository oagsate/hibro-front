import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlazaRoutingModule } from './plaza-routing.module';
import { PlazaComponent } from './plaza/plaza.component';

@NgModule({
  imports: [
    CommonModule,
    PlazaRoutingModule
  ],
  declarations: [PlazaComponent]
})
export class PlazaModule { }
