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
  sortByOptions:string[]=['Ticket No.','Issue Date','Offender Name']
  
  
  constructor(fb:FormBuilder,private api:ApiCallService){
    this.form= fb.group({
      court: ['',Validators.required],
      courtDate:['',Validators.required],
      sortBy:[''],
      recordNo: ['',[
        Validators.required,
        Validators.pattern('^(?!0$)[0-9]+$')
      ]],
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
    // console.log(this.list);
    
    this.infoContent=true
    // console.log(this.form)
    console.log(this.fc.sortBy.value)   
    console.log(this.form.value );
    

    if(this.fc.sortBy.value == 'Ticket No.'){

    }
    
  }

  clear(){
    this.infoContent=false
    this.form.reset()
  }


  recordNo(e:any){
    const a=Number(e.target.value)
    this.form.value.recordNo = a   
  }

  eventFired(msg:any){
    this.clear()
  }
}
