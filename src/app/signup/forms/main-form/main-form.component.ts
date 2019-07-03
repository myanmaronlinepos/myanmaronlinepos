import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,FormGroupDirective,NgForm } from '@angular/forms';
import { SignupComponent } from '../../signup.component';
import {Router, RouterLink} from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
  const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
  const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

  return (invalidCtrl || invalidParent);
}
}
@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})

export class MainFormComponent {
 
  // email = new FormControl('', [Validators.required, Validators.email]);

  // getErrorMessage() {
  //   return this.email.hasError('required') ? 'You must enter a value' :
  //       this.email.hasError('email') ? 'Not a valid email' :
  //           '';
  // }
  myForm: FormGroup;

  matcher = new MyErrorStateMatcher();

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      email: [' ',[Validators.required,Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['']
    }, { validator: this.checkPasswords });

  }
  onSubmit(){
    console.log(this.myForm);

  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmPassword.value;

    return pass === confirmPass ? null : { notSame: true }
  }
  }

