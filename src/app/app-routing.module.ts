import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'beneficiarios',
    loadChildren: () => import('./pages/beneficiarios/beneficiarios.module').then( m => m.BeneficiariosPageModule)
  },
  {
    path: 'prueba',
    loadChildren: () => import('./pages/prueba/prueba.module').then( m => m.PruebaPageModule)
  },
  {
    path: 'agregar-beneficiarios',
    loadChildren: () => import('./pages/agregar-beneficiarios/agregar-beneficiarios.module').then( m => m.AgregarBeneficiariosPageModule)
  },
  {
    path: 'editar-beneficiarios',
    loadChildren: () => import('./pages/editar-beneficiarios/editar-beneficiarios.module').then( m => m.EditarBeneficiariosPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
