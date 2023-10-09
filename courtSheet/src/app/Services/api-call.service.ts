import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  courtList!:any
  sortByVal:string
  constructor(public http:HttpClient) { }

  getData(){
   return this.http.get<any>('http://localhost:3000/getCourtList')
  }
  getCourtMaster(){
    console.log('sortByValue',this.sortByVal)
    const params=new HttpParams().set('sortBy','issue_date')
    return this.http.get<any>('http://localhost:3000/getCourtMaster',{params})
  }
  postInfo(arr:any[]){
    return this.http.post<any>('http://localhost:3000/postInfo',{arr})
  }
}
