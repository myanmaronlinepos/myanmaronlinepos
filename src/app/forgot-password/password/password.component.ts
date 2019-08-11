import { Component, OnInit,Inject } from '@angular/core';
import { EmitterService } from 'src/app/share/services/emitter.service';
import { Router,RouterLink } from '@angular/router';
import { AuthService } from 'src/app/share/services/authentication.service';
import { FormBuilder, FormControl, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { Email } from 'src/app/share/models/email';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationdialogComponent } from '../confirmationdialog/confirmationdialog.component';
export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
  isValidFormSubmitted = false;
  reactiveForm: FormGroup;
  EmailData:Email;
  matcher = new MyErrorStateMatcher();
  ngOnInit() {
    this.reactiveForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['']
    }, { validator: this.checkPasswords });

  }
  constructor(
    private router: Router,
    private authService:AuthService,
    private emitterService:EmitterService,
    private formBuilder: FormBuilder,
    // private dataFetchService:DataFetchService,
    public dialog: MatDialog,
  ) { } 
  onSubmit() {}
		
 
 onBack(){
  this.router.navigate(['/home/forget/email']);
 }
 
 openDialog() {
  this.dialog.open(ConfirmationdialogComponent, {
    data: {
      animal: 'panda'
 
    }
  });
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
