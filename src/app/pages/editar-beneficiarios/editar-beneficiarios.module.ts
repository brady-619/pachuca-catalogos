import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarBeneficiariosPageRoutingModule } from './editar-beneficiarios-routing.module';

import { EditarBeneficiariosPage } from './editar-beneficiarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,  ReactiveFormsModule,
    IonicModule,
    EditarBeneficiariosPageRoutingModule
  ],
  declarations: [EditarBeneficiariosPage]
})
export class EditarBeneficiariosPageModule {}
