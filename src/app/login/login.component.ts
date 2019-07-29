import { Component, OnInit } from '@angular/core';
import {Router,RouterLink} from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators ,FormGroupDirective,NgForm } from '@angular/forms';
import { AuthService } from '../share/services/authentication.service';
import { Login } from '../share/models/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  Progressing=false;
  progressData(){
    this.Progressing=true;
  }
 
  myForm: FormGroup;
  loginData:Login;
  constructor( private authService:AuthService,private router:Router ) { }

  ngOnInit(){
    this.myForm = new FormGroup({
      email:new FormControl("" ,[Validators.required,Validators.email]),
      password:new FormControl("", [Validators.required]),
    });
  }

  logout() {
    this.authService.logout().subscribe(
      response => {
        console.log(response);
      }
    ),
    error => {
      console.log(error);
    }
  }
  onSubmit() {
    const formValue=this.myForm.value;

    this.loginData={
      user_email:formValue.email,
      user_password:formValue.password
    }

    console.log(formValue);
    this.authService.login(this.loginData).subscribe(
      response => {
          console.log(response);
          this.router.navigate(['/dashboard/dashboard'])
      },
      error => {
          console.log(error);
      }
    )
  
  }

}



