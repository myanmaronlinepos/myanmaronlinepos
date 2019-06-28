import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupComponent } from '../../signup.component';
import {Router, RouterLink} from '@angular/router';
@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})

export class MainFormComponent implements OnInit {
 
  
  validateForm: FormGroup;

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  constructor( private router: Router,private fb: FormBuilder) { }
  onSubmit(){

    
    
  }

    ngOnInit(): void {
      this.validateForm = this.fb.group({
        email: [null, [Validators.email, Validators.required]],
        password: [null, [Validators.required]],
        checkPassword: [null, [Validators.required, this.confirmationValidator]]
      });
    }
  }

