import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeneficiariosPageRoutingModule } from './beneficiarios-routing.module';

import { BeneficiariosPage } from './beneficiarios.page';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';


import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,MatSortModule,
    IonicModule,
    BeneficiariosPageRoutingModule,MatTableModule ,MatPaginatorModule,MatInputModule
  ],
  declarations: [BeneficiariosPage]
})
export class BeneficiariosPageModule {}
