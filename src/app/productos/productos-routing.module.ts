import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrochureComponent } from './brochure/brochure.component';

const routes: Routes = [
  {
    path:'',
    component: BrochureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
