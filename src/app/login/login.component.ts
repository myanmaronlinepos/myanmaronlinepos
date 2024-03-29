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
  myForm: FormGroup;
  loginData:Login;
  addTaskValue: string="";
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
if(this.myForm.valid){
    this.loginData={
      user_email:formValue.email,
      user_password:formValue.password
    }
    this.Progressing=true;
  }
    console.log(formValue);
    this.authService.login(this.loginData).subscribe(
      response => {
          console.log(response);
          if(response){
            this.router.navigate(['/dashboard/dashboard'])
            this.Progressing=false;
          }else{
            this.Progressing=false;
            this.addTaskValue = null;

          }
          
      },
      error => {
          console.log(error);
      }
    )
  
  }

}



