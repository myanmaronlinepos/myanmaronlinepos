import { Component, OnInit } from '@angular/core';
import { Router,RouterLink } from '@angular/router';
// import { AuthService } from 'src/app/share/services/authentication.service';
import { FormBuilder, FormControl, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { EmitterService } from 'src/app/share/services/emitter.service';
import { Email } from 'src/app/share/models/email';
@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent implements OnInit {
  EmailForm: FormGroup;
  EmailData:Email;
  constructor(
    private router: Router,
    // private authService:AuthService,
    private emitterService:EmitterService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.EmailForm=this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  onSubmit() {
    const formValue=this.EmailForm.value;
		if (this.EmailForm.valid) {
      this.EmailData = {
        user_email:formValue.email,
      }
      this.router.navigate(['/home/forget/email']);
    } else {
    return;
  }
}
}
