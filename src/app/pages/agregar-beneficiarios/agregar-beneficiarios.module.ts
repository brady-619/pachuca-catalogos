import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarBeneficiariosPageRoutingModule } from './agregar-beneficiarios-routing.module';

import { AgregarBeneficiariosPage } from './agregar-beneficiarios.page';
    

@NgModule({
  imports: [
    CommonModule,
    FormsModule,    ReactiveFormsModule,
    IonicModule,
    AgregarBeneficiariosPageRoutingModule
  ],
  declarations: [AgregarBeneficiariosPage]
})
export class AgregarBeneficiariosPageModule {}
