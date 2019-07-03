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
  detailForm: FormGroup;
  constructor() { }
  // [errorStateMatcher]="matcher"
  //  fname = new FormControl('', [Validators.required, Validators.fname]);

  // getErrorMessage() {
  //   return this.fname.hasError('required') ? 'You must enter a value' :
  //       // this.fname.hasError('') ? 'Not a valid email' :
  //           '';
  // }

  ngOnInit() {
    this.detailForm = new FormGroup({
      // email:new FormControl('', [Validators.email]),
      // fname:new FormControl('', []),
      // lname:new FormControl('', []),
      // PhoneNumber:new FormControl('',[Validators.pattern('/^0[1-9]-[0-9]+$')]),
      // radioGroup:new FormControl('',[Validators.required])
    });
  }
  onSelect(event: any){
    this.showStore=true;
  }
  onCheck(event: any){
    this.showStore=false;
  }
  // matcher = new MyErrorStateMatcher();

}
