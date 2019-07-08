import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/share/models/User';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/share/services/authentication.service';
import { EmitterService } from 'src/app/share/services/emitter.service';
import { SignupModel } from '../signupModel';

@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.scss']
})

export class DetailFormComponent implements OnInit {
  showStore: boolean = false;
  sellbuy = ['Sell', 'Buy']
  detailForm: FormGroup;

  mainFormData:SignupModel;
  signupData: User;
  constructor(
    private authService: AuthService,
    private router: Router,
    private emitterService: EmitterService) {
    }
    
    ngOnInit() {

      this.detailForm = new FormGroup({
        'firstname': new FormControl(null, Validators.required),
        'lastname': new FormControl(null, Validators.required),
        'city': new FormControl(null),
        'address': new FormControl(null, Validators.required),
        'Phone': new FormControl(null, [Validators.required, Validators.maxLength(11)]),
        'storename': new FormControl(null, Validators.required),
      });

      this.mainFormData=this.emitterService.getData();

      if(!this.mainFormData) {
        this.router.navigate(['/home/signup']);
        return;
      }
    
    }

  onSubmit() {
    const formValue = this.detailForm.value;
    const user_name = formValue.firstname + formValue.lastname;

    this.signupData = {
      user_name: user_name,
      user_email: this.mainFormData.user_email,
      user_password: this.mainFormData.user_password,
      user_role: 1,
      user_phone: formValue.Phone,
      address: formValue.address,
      storename: formValue.storename,
      city_id: 1,
    }

    console.log(formValue);

    this.authService.signup(this.signupData)
      .then((registered: boolean) => {
        if (registered) {
          this.router.navigate(['/dashboard/dashboard']);
        } else {
          console.log('error');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }


  onSelect(event: any) {
    this.showStore = true;
  }
  onCheck(event: any) {
    this.showStore = false;
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
// export class SelectOverviewExample {
//   foods: Food[] = [
//     { value: 'steak-0', viewValue: 'Steak' },
//     { value: 'pizza-1', viewValue: 'Pizza' },
//     { value: 'tacos-2', viewValue: 'Tacos' }
//   ];
// }

