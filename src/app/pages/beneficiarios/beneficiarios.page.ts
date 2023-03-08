import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GetListadoBeneficiariosService } from '../../services/get-listado-beneficiarios.service';
import { InsertBeneficiarioService } from '../../services/insert-beneficiario.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Beneficiarios } from '../../interface/beneficiarios';

import {AfterViewInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';

import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatSort, Sort} from '@angular/material/sort';



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
  dataSource = new MatTableDataSource < PeriodicElement > ();

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



  displayedColumns: string[] = ['idcatalogo', 'nombre', 'rfc', 'telefono', 'cuenta', 'banco', 'options'];

  constructor(private _liveAnnouncer: LiveAnnouncer,private router: Router,private insertBeneficiario: InsertBeneficiarioService, public alertCtrl: AlertController,private listadobeneficiario: GetListadoBeneficiariosService, private alertController: AlertController) { }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort, {static: false}) set content(sort: MatSort) {
    this.dataSource.sort = sort;
  }


  ngAfterViewInit() {

    



  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



  ngOnInit() {


   this.listadobeneficiario.ListadoBeneficiario().then(async respuesta => {
      console.log(respuesta);
      this.data = respuesta.data
      let ELEMENT_DATA: PeriodicElement[] = respuesta.data
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      // this.dataSource = ELEMENT_DATA;

      // this.dataSource = new MatTableDataSource(ELEMENT_DATA);


      console.log(this.dataSource)
      this.dataSource.paginator = this.paginator;
      // console.log(this.dataSource.paginator)
      // console.log(this.paginator)






    });




    // await this.listadobeneficiario.ListadoBeneficiario().then(async respuesta => {
    //   console.log(respuesta);

    //   this.data = respuesta.data

    // const ELEMENT_DATA: PeriodicElement[] =respuesta.data
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


    //   this.dataSource = ELEMENT_DATA;


    // })



  }

  announceSortChange(sortState: Sort) {
    console.log("mueve", sortState)
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }




  async editar(nombre: any) {

    console.log("Diste click en editar", nombre)

    localStorage.setItem("nombre_beneficiario",nombre)




/*obteniendo store para inicializar*/






      this.router.navigate(['editar-beneficiarios']);


  }



  async eliminar(nombre: any) {

    console.log("Diste click en editar", nombre)

  }


  async agregar(){
    console.log("add");

      this.router.navigate(['agregar-beneficiarios']);






    // const alert = await this.alertController.create({
    //   header: 'Alta de beneficiario',
    //   // buttons: ['Guardar','Cancelar'],
    //   buttons: [
    //     {
    //         text: 'Cancel',
    //         role: 'cancel',
    //         cssClass: 'secondary',
    //         handler: () => {
    //             console.log('Confirm Cancel');
    //         }
    //     }, 
    //     {
    //         text: 'Ok',
    //         handler: async (alertData) => { //takes the data 
    //           // console.log("SIM vendida");
    //             console.log("El valor de venta enviado sera",
    //             alertData.nombre, 
    //             alertData.rfc, 
    //             alertData.telefono, 
    //             alertData.cuenta, 
    //             alertData.banco
    //             );

    //             // let params = {
    //             //   //  data:[{nombre:this.data.nombre , apellido: this.data.apellido, icc:this.data.icc}
    //             //  [{ nombre: alertData.nombre, rfc: alertData.rfc,telefono: alertData.telefono,cuenta: alertData.cuenta,banco: alertData.banco}]
    //             // }

    //             let params = {
    //               data: [{  nombre: alertData.nombre, rfc: alertData.rfc,telefono: alertData.telefono,cuenta: alertData.cuenta,banco: alertData.banco
    //                }] }



    //             await this.insertBeneficiario.InsertBeneficiario(params).then(async respuesta => {
    //               // console.log(data2)
    //               console.log("paso chido", respuesta)
                
                

    //               if (respuesta.status === "000") {
    //                 // alert("Carga realizada con éxito.");
    //                 const alert = await this.alertCtrl.create({  
    //                   header: 'Registro creado con éxito.',  
    //                   // subHeader: 'SubTitle',  
    //                   // message: 'This is an alert message',  
    //                   buttons: ['OK']  
    //                 });  
    //                 await alert.present();  

    //                 await this.ngAfterViewInit();
    //               }
    //               else {
    //                 // alert("Carga realizada con éxito.");
    //                 const alert = await this.alertCtrl.create({  
    //                   header: 'Error al registrar.',  
    //                   // subHeader: 'SubTitle',  
    //                   // message: 'This is an alert message',  
    //                   buttons: ['OK']  
    //                 });  
    //                 await alert.present();  

    //                 // this.ngOnInit();
    //               }
                
                
                
                
    //             });





           
                
            
                


    //         }
    //     }
    // ],
    //   inputs: [
    //     {
    //       type: 'text',
    //       name: 'nombre',
    //       placeholder: 'nombre',
          
    //     },
    //     {
    //       type: 'text',
    //       name: 'rfc',
    //       placeholder: 'rfc',
    //     },
    //     {
    //       type: 'text',
    //       name: 'telefono',
    //       placeholder: 'telefono',
    //     },
    //     {
    //       type: 'text',
    //       name: 'cuenta',
    //       placeholder: 'cuenta',
    //     },
    //     {
    //       type: 'text',
    //       name: 'banco',
    //       placeholder: 'banco',
    //     }
    //   ],
    // });




    // await alert.present();





    
  }


}
