import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeneficiariosPageRoutingModule } from './beneficiarios-routing.module';

import { BeneficiariosPage } from './beneficiarios.page';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeneficiariosPageRoutingModule,MatTableModule ,MatPaginatorModule
  ],
  declarations: [BeneficiariosPage]
})
export class BeneficiariosPageModule {}
