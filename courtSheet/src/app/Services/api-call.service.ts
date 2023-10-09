import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  courtList!:any
  constructor(public http:HttpClient) { }

  getData(){
   return this.http.get<any>('http://localhost:3000/getCourtList')
  }
  getCourtMaster(){
    return this.http.get<any>('http://localhost:3000/getCourtMaster')
  }
  postInfo(arr:any[]){
    console.log('arr',arr)
    const headers = new HttpHeaders().set('Content-type', 'application/json');
    console.log(headers)
    return this.http.post<any>('http://localhost:3000/postInfo',{arr})
  }
}
