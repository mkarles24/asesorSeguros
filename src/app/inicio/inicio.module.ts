import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { CarruselComponent } from './carrusel/carrusel.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CarruselComponent

  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    SharedModule
  ]
})
export class InicioModule { }
