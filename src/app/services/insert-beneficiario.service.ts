import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InsertBeneficiarioService {

  constructor(private http:HttpClient) { }

  InsertBeneficiario(params:any):Promise<any> {
  return new Promise((resolve,reject) => {
    this.http.post('https://f370rb9dy6.execute-api.us-east-1.amazonaws.com/dev/insert-beneficiario',params).subscribe(resp => {
      resolve(resp);
    },err=>{
      reject(err)
    })            
  })
}

}
