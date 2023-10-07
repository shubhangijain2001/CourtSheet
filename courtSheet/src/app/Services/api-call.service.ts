import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  courtList!:any
  constructor(public http:HttpClient) { }

  getData(){
   return this.http.get<any>('http://localhost:3000/getCourtList')
  }
}
