import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NosotrosRoutingModule } from './nosotros-routing.module';
import { AboutComponent } from './about/about.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    NosotrosRoutingModule,
    SharedModule
  ]
})
export class NosotrosModule { }
