import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarBeneficiariosPage } from './editar-beneficiarios.page';

const routes: Routes = [
  {
    path: '',
    component: EditarBeneficiariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarBeneficiariosPageRoutingModule {}
