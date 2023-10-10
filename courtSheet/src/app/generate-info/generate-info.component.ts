import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiCallService } from '../Services/api-call.service';
import { Subscription } from 'rxjs';
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
  informationNo?:FormArray<any>;
  sub!:Subscription
  list:any
  arr: { ticket: any; val: any; }[] = [];
  @Output() childEmitter = new EventEmitter();


  // tickets = [
  //   {
  //     ticketNo: 238732039,
  //     issueDate: new Date('2023-09-01'),
  //     offenderName: 'John Doe',
  //   },
  //   {
  //     ticketNo: 238732040,
  //     issueDate: new Date('2023-09-02'),
  //     offenderName: 'Jane Smith',
  //   },
  //   {
  //     ticketNo: 238732041,
  //     issueDate: new Date('2023-09-03'),
  //     offenderName: 'Alice Johnson',
  //   },
  // ];

  constructor(fb: FormBuilder,private api:ApiCallService){ 

    this.form = fb.group({
      prefix:['',Validators.pattern("[a-zA-Z0-9]+$")],
      sequenceNo:['',Validators.pattern("[0-9]*")],
      assignMag:[''],
      assignSlot:['', Validators.required],
      infoNoInput: fb.array([]) 
    })
  }

  ngOnInit(){
    const api1=this.api.getCourtMaster()
    this.sub = api1.subscribe((val)=>{
      this.list=val
    })
  }

  get fc(){
    return this.form.controls
  }

  checkVisibility(e:any){
    this.isVisible = e.target.value=="true"?true:false
  }

  loadPrefix(e:any){
    this.prefix = e.target.value
    this.infoNo = this.prefix + this.seqNo
    
  }
  
  loadSeqNo(e:any){
    this.seqNo = Number(e.target.value)
    this.infoNo = this.prefix + this.seqNo
  }

  addInfoNo(infoNos:HTMLInputElement){
    (this.fc.infoNoInput as FormArray)?.push(
      new FormControl(infoNos.value)
    )
    
  }

  onSave() {
    
    if (this.isVisible == false) {
      this.form.value.prefix = null
      this.form.value.sequenceNo = 0

    } else {
      this.form.value.infoNoInput = this.list.map((ticket, i) => `${this.prefix}${this.seqNo + i}`);      
    }
    alert("Successfully Added!");

    for (let i = 0; i < this.list.length; i++) {
      this.arr.push({
        ticket: this.list[i].ticket_no,
        val: this.form.value.infoNoInput[i]
      });
    }

    this.api.postInfo(this.arr).subscribe({
      next: response => {
        console.log('POST Request was successful', response);
      },
      error: error => {
        console.error('Error occurred during POST request', error);
      }
    })
  }

  onClear(){
    this.childEmitter.emit();
  }
}
