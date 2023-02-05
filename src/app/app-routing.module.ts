import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then(x => x.InicioModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('./productos/productos.module').then(x => x.ProductosModule)
  },
  {
    path: 'nosotros',
    loadChildren: () => import('./nosotros/nosotros.module').then(x => x.NosotrosModule)
  },
  {
    path: 'actualidad',
    loadChildren: () => import('./actualidad/actualidad.module').then(x => x.ActualidadModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./contacto/contacto.module').then(x => x.ContactoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
