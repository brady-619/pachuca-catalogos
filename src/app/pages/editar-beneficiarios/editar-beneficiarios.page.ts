import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { InsertBeneficiarioService } from '../../services/insert-beneficiario.service';
import { GetListdoIdService }  from '../../services/get-listdo-id.service';

@Component({
  selector: 'app-editar-beneficiarios',
  templateUrl: './editar-beneficiarios.page.html',
  styleUrls: ['./editar-beneficiarios.page.scss'],
})
export class EditarBeneficiariosPage implements OnInit {


  constructor(private getlistadoid: GetListdoIdService,private router: Router,private insertar: InsertBeneficiarioService, private alertController: AlertController) { }

  beneficiarioForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(1)]),
    rfc: new FormControl(''),
    telefono: new FormControl('', [Validators.minLength(10), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
    cuenta: new FormControl('', Validators.minLength(10)),
    banco: new FormControl('')
  });


  data:any;

  async ngOnInit() {
    
  }


/*render*/
  async ngAfterViewInit() {




    localStorage.getItem("nombre_beneficiario")

    const params ={nombre: localStorage.getItem("nombre_beneficiario")};

    //  const params = this.beneficiarioForm.value
    console.log("antes", this.beneficiarioForm.value);


     await this.getlistadoid.ListadoBeneficiarioId(params).then(async respuesta => {
       console.log(respuesta);

       





       this.data= respuesta.data



     });








     


  }











  get registerFormControl() {
    return this.beneficiarioForm.controls;
  }
  async guardar() {

    const params = this.beneficiarioForm.value
    console.log("guardar", params);



    let data2 = {
      //    data:[{nombre: nombre , dueno: dueno, apellido: apellido,telefono1: tel1, telefono2:tel2, domicilio:domicilio, email:email, giro,vendedor: this.nombre_global, latitud: this.latitud, longitud: this.longitud }]
      data: [params]
    }


    await this.insertar.InsertBeneficiario(data2).then(async respuesta => {
      console.log(respuesta);

      if (respuesta.status = "000") {
        const alert = await this.alertController.create({
          header: 'Alert',
          subHeader: 'Tu registro ha sido exitoso',
          // message: 'This is an alert!',
          buttons: ['OK'],
        });

        await alert.present();

        // this.beneficiarioForm = new FormGroup({
        //   nombre: new FormControl('', [Validators.required, Validators.minLength(1)]),
        //   rfc: new FormControl(''),
        //   telefono: new FormControl(''),
        //   cuenta: new FormControl(''),
        //   banco: new FormControl('')
        // });

        
      this.router.navigate(['beneficiarios']);




      } else {
        const alert = await this.alertController.create({
          header: 'Alert',
          subHeader: 'Error al cargar tu registro',
          // message: 'This is an alert!',
          buttons: ['OK'],
        });

        await alert.present();

      }


    })

  }


}
