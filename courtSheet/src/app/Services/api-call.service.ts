import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  courtList!:any
  sortByVal:string
  ticketLimit:number
  constructor(public http:HttpClient) { }

  getData(){
   return this.http.get<any>('http://localhost:3000/getCourtList')
  }
  getCourtMaster(){    
    const params=new HttpParams().set('sortBy',this.sortByVal).set('limit',this.ticketLimit)
    return this.http.get<any>('http://localhost:3000/getCourtMaster',{params})
  }
  postInfo(arr:any[]){
    return this.http.post<any>('http://localhost:3000/postInfo',{arr})
  }
}
