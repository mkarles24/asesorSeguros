import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';
import { RedesComponent } from './redes/redes.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    RedesComponent
  ],
  imports: [
    CommonModule,
    ContactoRoutingModule,
    SharedModule
  ]
})
export class ContactoModule { }
