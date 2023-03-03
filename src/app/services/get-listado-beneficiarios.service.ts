import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetListadoBeneficiariosService {

  constructor(private http:HttpClient) { }

  ListadoBeneficiario():Promise<any> {
  return new Promise((resolve,reject) => {
    this.http.get('https://f370rb9dy6.execute-api.us-east-1.amazonaws.com/dev/get-beneficiarios').subscribe(resp => {
      resolve(resp);
    },err=>{
      reject(err)
    })            
  })
}

}

