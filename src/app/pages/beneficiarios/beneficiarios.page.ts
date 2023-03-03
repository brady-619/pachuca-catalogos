import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GetListadoBeneficiariosService } from '../../services/get-listado-beneficiarios.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Beneficiarios } from '../../interface/beneficiarios';


export interface PeriodicElement {
  idcatalogo: number;
  nombre: string;
  rfc: string;
  telefono: string;
  cuenta: string
  banco: string;
}

@Component({
  selector: 'app-beneficiarios',
  templateUrl: './beneficiarios.page.html',
  styleUrls: ['./beneficiarios.page.scss'],
})
export class BeneficiariosPage implements OnInit {

  data: any;
  dataSource:any

  // console.log("Diste click en editar", nombre, rfc, telefono, cuenta, banco)

  // ELEMENT_DATA: PeriodicElement[] = [
  //   { position: 1, nombre: 'Hydrogen', rfc: 'palabra', telefono: 'H', cuenta:'jse',banco:'bbva' },
  //   { position: 2, nombre: 'Helium', rfc: '4.0026', telefono: 'He' , cuenta:'jse',banco:'bbva'},
  //   { position: 3, nombre: 'Lithium', rfc: '6.941', telefono: 'Li' , cuenta:'jse',banco:'bbva'},
  //   { position: 4, nombre: 'Beryllium', rfc: '9.0122', telefono: 'Be' , cuenta:'jse',banco:'bbva'},
  //   { position: 5, nombre: 'Boron', rfc: '10.811', telefono: 'B' , cuenta:'jse',banco:'bbva'},
  //   { position: 6, nombre: 'Carbon', rfc: '12.0107', telefono: 'C' , cuenta:'jse',banco:'bbva'},
  //   { position: 7, nombre: 'Nitrogen', rfc: '14.0067', telefono: 'N' , cuenta:'jse',banco:'bbva'},
  //   { position: 8, nombre: 'Oxygen', rfc: '15.9994', telefono: 'O', cuenta:'jse',banco:'bbva' },
  //   { position: 9, nombre: 'Fluorine', rfc: '18.9984', telefono: 'F', cuenta:'jse',banco:'bbva' },
  //   { position: 10, nombre: 'Neon', rfc: '20.1797', telefono: 'Ne' , cuenta:'jse',banco:'bbva'},
  // ];

 

displayedColumns: string[] = ['idcatalogo', 'nombre', 'rfc', 'telefono','cuenta','banco','options'];

  constructor(private listadobeneficiario: GetListadoBeneficiariosService, private alertController: AlertController) { }

  async ngOnInit() {

    await this.listadobeneficiario.ListadoBeneficiario().then(async respuesta => {
      console.log(respuesta);

      this.data = respuesta.data

    const ELEMENT_DATA: PeriodicElement[] =respuesta.data
    //  [ 
    //       { idcatalogo: 1, nombre: 'Hydrogen', rfc: 'palabra', telefono: 'H', cuenta:'jse',banco:'bbva' },
    // { idcatalogo: 2, nombre: 'Helium', rfc: '4.0026', telefono: 'He' , cuenta:'jse',banco:'bbva'},
    // { idcatalogo: 3, nombre: 'Lithium', rfc: '6.941', telefono: 'Li' , cuenta:'jse',banco:'bbva'},
    // { idcatalogo: 4, nombre: 'Beryllium', rfc: '9.0122', telefono: 'Be' , cuenta:'jse',banco:'bbva'},
    // { idcatalogo: 5, nombre: 'Boron', rfc: '10.811', telefono: 'B' , cuenta:'jse',banco:'bbva'},
    // { idcatalogo: 6, nombre: 'Carbon', rfc: '12.0107', telefono: 'C' , cuenta:'jse',banco:'bbva'},
    // { idcatalogo: 7, nombre: 'Nitrogen', rfc: '14.0067', telefono: 'N' , cuenta:'jse',banco:'bbva'},
    // { idcatalogo: 8, nombre: 'Oxygen', rfc: '15.9994', telefono: 'O', cuenta:'jse',banco:'bbva' },
    // { idcatalogo: 9, nombre: 'Fluorine', rfc: '18.9984', telefono: 'F', cuenta:'jse',banco:'bbva' },
    // { idcatalogo: 10, nombre: 'Neon', rfc: '20.1797', telefono: 'Ne' , cuenta:'jse',banco:'bbva'},
    //   ];


      this.dataSource = ELEMENT_DATA;
    

    })



  }




  async editar(nombre: any, rfc: any, telefono: any, cuenta: any, banco: any) {

    console.log("Diste click en editar", nombre, rfc, telefono, cuenta, banco)

  }




}
