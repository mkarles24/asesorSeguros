import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActualidadRoutingModule } from './actualidad-routing.module';
import { NewsComponent } from './news/news.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    CommonModule,
    ActualidadRoutingModule,
    SharedModule
  ]
})
export class ActualidadModule { }
