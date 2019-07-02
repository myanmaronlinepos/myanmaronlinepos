import { Component, OnInit } from '@angular/core';
import {Router,RouterLink} from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators ,FormGroupDirective,NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      password: [' ', [Validators.required]],
      email: [' ',[Validators.required,Validators.email]]
    });
  }
  ngOnit(){
    this.myForm = new FormGroup({
      'email': new FormControl(null),
      'password': new FormControl(null)
    });
  }
  onSubmit(){
    console.log(this.myForm);
  
  }
  ngOnInit(){
    this.myForm.reset();
  }
}



