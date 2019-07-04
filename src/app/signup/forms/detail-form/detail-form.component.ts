import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormBuilder, FormControl, FormGroup, Validators,FormGroupDirective,NgForm } from '@angular/forms';

// export class MyErrorStateMatcher implements ErrorStateMatcher {
  // isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    // const isSubmitted = form && form.submitted;
    // return !!(control && control.invalid);
//   }
// }

@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.scss']
})
export class DetailFormComponent implements OnInit {
  showStore: boolean=false;
  sellbuy=['Sell','Buy']
  detailForm: FormGroup;
  constructor() { }
  
  ngOnInit() {
    this.detailForm = new FormGroup({
'username': new FormControl(null,Validators.required),
'username1': new FormControl(null,Validators.required),
'city': new FormControl(null,Validators.required),
'address': new FormControl(null,Validators.required),
'Phone': new FormControl(null,[Validators.required,Validators.maxLength(11)]),
// 'storename': new FormControl(null,Validators.required),

    });
  }
  onSubmit(){
    this.detailForm;
  }
  onSelect(event: any){
    this.showStore=true;
  }
  onCheck(event: any){
    this.showStore=false;
  }
  // matcher = new MyErrorStateMatcher();

}
