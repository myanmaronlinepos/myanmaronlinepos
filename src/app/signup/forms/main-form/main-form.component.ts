import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';
import { EmitterService } from 'src/app/share/services/emitter.service';
import { SignupModel } from '../signupModel';
import { AuthService } from 'src/app/share/services/authentication.service';
import { User } from 'src/app/share/models/User';



@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})

export class MainFormComponent  implements OnInit{
isValidFormSubmitted = false;
signupData: User;
mainFormData:SignupModel;
reactiveForm: FormGroup;
SignupData:SignupModel;
 matcher = new MyErrorStateMatcher();
  ngOnInit() {
    this.reactiveForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['']
    }, { validator: this.checkPasswords });

  }
 constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private emitterService:EmitterService,
    private authService:AuthService) { }
  onSubmit() {
    const formValue=this.reactiveForm.value;
		if (this.reactiveForm.valid) {
      this.SignupData = {
        user_email:formValue.email,
        user_password:formValue.password
      }
    
       this.emitterService.setData(this.SignupData);
      this.router.navigate(['/home/signup/detail']);
		} else {
			return;
		}
		
 }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmPassword.value;
    return pass === confirmPass ? null : { notSame: true }
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}
