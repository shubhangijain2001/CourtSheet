import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RequiredPipe } from '../Pipes/required.pipe';

@Component({
  selector: 'app-generate-info',
  templateUrl: './generate-info.component.html',
  styleUrls: ['./generate-info.component.css']
})

export class GenerateInfoComponent{

  form:any;
  isVisible: boolean = true;
  prefix:any='';
  seqNo:number=0;
  infoNo:string='';
  pageLoad:boolean=true;

  tickets = [
    {
      ticketNo: 238732039,
      issueDate: new Date('2023-09-01'),
      offenderName: 'John Doe',
    },
    {
      ticketNo: 238732040,
      issueDate: new Date('2023-09-02'),
      offenderName: 'Jane Smith',
    },
    {
      ticketNo: 238732041,
      issueDate: new Date('2023-09-03'),
      offenderName: 'Alice Johnson',
    },
  ];

  constructor(fb: FormBuilder){ 

    this.form = fb.group({
      prefix:['',Validators.pattern("[a-zA-Z0-9]+$")],
      sequenceNo:['',Validators.pattern("[0-9]*")],
      assignMag:[''],
      assignSlot:['', Validators.required]
    })
  }

  get fc(){
    return this.form.controls
  }

  checkVisibility(e:any){
    this.isVisible = e.target.value=="true"?true:false
    console.log(this.isVisible);
  }

  loadPrefix(e:any){
    this.prefix = e.target.value
    this.infoNo = this.prefix+this.seqNo
    console.log(this.infoNo);
    
  }
  
  loadSeqNo(e:any){
    this.seqNo = Number(e.target.value)
    this.infoNo = this.prefix+this.seqNo
    console.log(this.infoNo);    
  }

  // {{prefix}}{{seqNo+1}}

}
