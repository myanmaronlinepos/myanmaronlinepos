import { Injectable } from '@angular/core';
import { SignupModel } from 'src/app/signup/forms/signupModel';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmitterService {

  signupData:SignupModel;
  constructor() {
   }

   setData(data:SignupModel) {
     this.signupData=data;
   }
   
   getData() {
     return this.signupData;
   }
}
