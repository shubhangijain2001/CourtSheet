import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormArray,FormBuilder, Validators } from '@angular/forms';
// import { NgModule } from '@angular/core';

@Component({
  selector: 'app-base-form',
  templateUrl: './base-form.component.html',
  styleUrls: ['./base-form.component.css']
})
export class BaseFormComponent implements OnInit{
  form:any;
  infoContent:boolean=false
  obj:{[index:string]:any}={}
  
  constructor(fb:FormBuilder){
    this.form= fb.group({
      court: ['',Validators.required],
      courtDate:['',Validators.required],
      sortBy:[''],
      recordNo: ['',[Validators.required,Validators.pattern('[0-9]*')]],
      mode:['']
    })
  }

  ngOnInit(): void {
    
  }

  get fc(){
    return this.form.controls;
  }

  submit(){
    this.infoContent=true
    console.log(this.form)
    console.log(this.fc)
    Object.keys(this.fc).forEach((key)=>{
      const control=this.fc[key]
     
      const val=control.validator?control.validator:null
      
      if(val!=null && val(key)){
        this.obj[key]=val(key)
      }
      
    })
    
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
