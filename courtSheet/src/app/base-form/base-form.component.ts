import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormArray,FormBuilder, Validators } from '@angular/forms';
// import { NgModule } from '@angular/core';
import { ApiCallService } from '../Services/api-call.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-base-form',
  templateUrl: './base-form.component.html',
  styleUrls: ['./base-form.component.css']
})
export class BaseFormComponent implements OnInit{
  form:any;
  infoContent:boolean=false
  obj:{[index:string]:any}={}
  sub?: Subscription
  list!:any
  sortByOptions:any[]=[{name:'Ticket No.'},{name:'Issue Date'},{name:'Offender Name'}]
  
  
  constructor(fb:FormBuilder,private api:ApiCallService){
    this.form= fb.group({
      court: ['',Validators.required],
      courtDate:['',Validators.required],
      sortBy:['Ticket No'],
      recordNo: ['',[Validators.required,Validators.pattern('[0-9]*')]],
      mode:['']
    })
  }

  ngOnInit(): void {
    const api1=this.api.getData()
    this.sub = api1.subscribe((val)=>{
      this.list=val
    })
    
  }

  get fc(){
    return this.form.controls;
  }

  submit(){
    this.infoContent=true
    console.log(this.form)
    console.log(this.fc.sortBy.value)
    //console.log(this.form.get('sortBy').value)
    if(this.fc.sortBy.value='Issue Date')
    this.api.sortByVal='issue_date'
    else if(this.fc.sortBy.value='Offender Name')
    this.api.sortByVal='offendername'
    else if(this.fc.sortBy.value='Ticket No.'){
    this.api.sortByVal='ticket_no'
    console.log(this.api.sortByVal)
    }
  }

  clear(){
    this.infoContent=false
    this.form.reset()
  }


  recordNo(e:any){
    const a=e.target.value
  }

  eventFired(msg:any){
    this.clear()
  }
}
