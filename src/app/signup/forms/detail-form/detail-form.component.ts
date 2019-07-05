import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormBuilder, FormControl, FormGroup, Validators,FormGroupDirective,NgForm } from '@angular/forms';
import { User } from 'src/app/share/models/User';
//import { string } from 'prop-types';
import {Router,RouterLink} from '@angular/router';
import { AuthService } from 'src/app/share/services/authentication.service';
// export interface City {
//   city_id:number;
//     city_name:string;
// }
export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.scss']
})

export class DetailFormComponent implements OnInit {
  showStore: boolean=false;
  sellbuy=['Sell','Buy']
  detailForm: FormGroup;
  signupData:User;
  constructor( private authService: AuthService, private router:Router) { }
  
  ngOnInit() {
    this.detailForm = new FormGroup({
'username': new FormControl(null,Validators.required),
'username1': new FormControl(null,Validators.required),
'city': new FormControl(null,Validators.required),
'address': new FormControl(null,Validators.required),
'Phone': new FormControl(null,[Validators.required,Validators.maxLength(11)]),
// 'storename': new FormControl(null,Validators.required),

    });
  }
  onSubmit(){
    // this.detailForm;
    const formValue=this.detailForm.value;
    // this.signupData= {
    //   user_name:formValue.username,
    //   user_email:formValue.user_email,
    //   user_password:formValue.user_password,
    //   user_role:formValue.role,
    //   user_phone:formValue.Phone,
    //   address:formValue.address,
    //   storename:formValue.storename,
    //   city_id:formValue.city,

    // }
  
  console.log(formValue);
    this.authService.login(this.signupData).subscribe(
      response => {
          console.log(response);
          this.router.navigate(['/dashboard/dashboard'])
      },
      error => {
          console.log(error);
      }
    )
  }


  onSelect(event: any){
    this.showStore=true;
  }
  onCheck(event: any){
    this.showStore=false;
  }
  

}
// export class Selectcity {
//   cities: City[] = [
//     {city_id:1, city_name:'Yangon'},
//     {city_id:2, city_name:'Monywa'},
//     {city_id:3, city_name:'Mandalay'},
//     {city_id:4, city_name:'Shwebo'},
   
//   ];
// }
export class SelectOverviewExample {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
}

