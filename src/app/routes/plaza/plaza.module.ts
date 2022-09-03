import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlazaRoutingModule } from './plaza-routing.module';
import { PlazaComponent } from './plaza/plaza.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    PlazaRoutingModule,
    SharedModule
  ],
  declarations: [PlazaComponent]
})
export class PlazaModule { }
