import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarBeneficiariosPage } from './agregar-beneficiarios.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarBeneficiariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarBeneficiariosPageRoutingModule {}
