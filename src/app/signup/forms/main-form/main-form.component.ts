import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';
import { EmitterService } from 'src/app/share/services/emitter.service';
import { SignupModel } from '../signupModel';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})

export class MainFormComponent  implements OnInit{
  ngOnInit() {}
    // throw new Error("Method not implemented.");
 loadingData=false;
 loading(){
this.loadingData=true;
  }

  myForm: FormGroup;


  matcher = new MyErrorStateMatcher();
  
  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private emitterService:EmitterService
    ) {
    this.myForm = this.formBuilder.group({
      email: [' ', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['']
    }, { validator: this.checkPasswords });

  }
  onSubmit() {
    const data:SignupModel={
      user_email: this.myForm.value.email,
      user_password: this.myForm.value.password
    };
    
     this.emitterService.setData(data);
     this.router.navigate(['/home/signup/detail'])
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
