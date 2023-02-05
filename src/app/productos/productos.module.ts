import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { BrochureComponent } from './brochure/brochure.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    BrochureComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    SharedModule
  ]
})
export class ProductosModule { }
