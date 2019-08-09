import { Component, OnInit } from '@angular/core';
import { EmitterService } from 'src/app/share/services/emitter.service';
import { Router,RouterLink } from '@angular/router';
// import { AuthService } from 'src/app/share/services/authentication.service';
import { FormBuilder, FormControl, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { Email } from 'src/app/share/models/email';

@Component({
  selector: 'app-comfirm-code',
  templateUrl: './comfirm-code.component.html',
  styleUrls: ['./comfirm-code.component.scss']
})
export class ComfirmCodeComponent implements OnInit {
  ComfirmForm: FormGroup;
  EmailData:Email;
  // emailData:EmailModel;
constructor(
    private router: Router,
    // private authService:AuthService,
    private emitterService:EmitterService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.ComfirmForm=this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  
    onSubmit() {
      const formValue=this.ComfirmForm.value;
		if (this.ComfirmForm.valid) {
      this.EmailData = {
        user_email:formValue.email,
      }
      this.router.navigate(['/home/forget/password']);
    } else {
    return;
  }
    }

  }
