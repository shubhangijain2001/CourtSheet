import { Component } from '@angular/core';
import { FormGroup, FormControl,FormArray,FormBuilder, Validators } from '@angular/forms';
// import { NgModule } from '@angular/core';

@Component({
  selector: 'app-base-form',
  templateUrl: './base-form.component.html',
  styleUrls: ['./base-form.component.css']
})
export class BaseFormComponent {
  form:any
  obj:{[index:string]:any}={}
  constructor(fb:FormBuilder){
    this.form= fb.group({
      court: ['',[Validators.required,Validators.minLength(5)]],
      courtDate:['',Validators.required],
      sortBy:['',Validators.required],
      recordNo: ['',[Validators.required,Validators.pattern('[0-9]*')]],
      mode:['']
    })
  }

  get fc(){
    return this.form.controls;
  }

  submit(){
    
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
    this.form.reset()
  }
  recordNo(e:any){
    const a=e.target.value
  }
}
