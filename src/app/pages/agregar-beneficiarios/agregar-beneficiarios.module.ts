import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarBeneficiariosPageRoutingModule } from './agregar-beneficiarios-routing.module';

import { AgregarBeneficiariosPage } from './agregar-beneficiarios.page';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,    ReactiveFormsModule,MatFormFieldModule,
    IonicModule,
    AgregarBeneficiariosPageRoutingModule
  ],
  declarations: [AgregarBeneficiariosPage]
})
export class AgregarBeneficiariosPageModule {}
