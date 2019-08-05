import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/share/services/authentication.service';
import { FormBuilder, FormControl, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { EmitterService } from 'src/app/share/services/emitter.service';


@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent implements OnInit {
  EmailForm: FormGroup;
  EmailData:any;

  constructor(private router: Router,
    private authService:AuthService,
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
    }
    console.log(formValue);
    this.authService.login(this.EmailData).subscribe(
      response => {
        console.log(response);
        if(response){
          this.router.navigate(['/home/comfirm-code'])
        }else{
          return
        }
},
error => {
  console.log(error);
}
)
     }
    }
