import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Input } from '@angular/core';

@Component({
  selector: 'app-sub-generate-info',
  templateUrl: './sub-generate-info.component.html',
  styleUrls: ['./sub-generate-info.component.css']
})
export class SubGenerateInfoComponent {

  form:any;
  visibility:any =true;

  constructor(fb: FormBuilder){ 

    this.form = fb.group({
      prefix:[''],
      sequenceNo:[''],
      assignMag:[''],
      assignSlot:['', Validators.required]
    })
  }

  get fc(){
    return this.form.controls
  }

  @Input() booleanFromGenerateInfo?:boolean
  // checkVisible(e:any){
  //   this.visibility = e.target.value
  //   console.log(this.visibility)
    
  // }

}
