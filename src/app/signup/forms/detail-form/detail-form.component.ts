import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/share/models/User';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/share/services/authentication.service';
import { EmitterService } from 'src/app/share/services/emitter.service';
import { SignupModel } from '../signupModel';
export interface City {
  id: number;
  viewValue: string;
}


@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.scss']
})

export class DetailFormComponent implements OnInit {
showSpinner=false;
isValidFormSubmitted = false;
showStore: boolean = false;
sellbuy = ['Sell', 'Buy']
detailForm: FormGroup;
showProgress:boolean=false;
mainFormData:SignupModel;
signupData: User;
	
loadData(){
  this.showSpinner=true;
}
  cities: City[] = [
    {id: 1, viewValue:'Monywa'},
    {id:2, viewValue: 'Yangon'},
    {id:3, viewValue: 'Mandalay'},
    {id:4, viewValue: 'Shwebo'}
  ];
  constructor(
    private authService: AuthService,
    private router: Router,
    private emitterService: EmitterService) {
    }
    
    ngOnInit() {

      this.detailForm = new FormGroup({
        'firstname': new FormControl(null, [Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
        'lastname': new FormControl(null, [Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
        'city': new FormControl(null, [Validators.required]),
        'address': new FormControl(null,[Validators.required]),
        'Phone': new FormControl(null, [Validators.required, Validators.maxLength(11)]),
        'storename': new FormControl(null),
        'sell':new FormControl(null,[Validators.required]),
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
		if (this.detailForm.valid) {
      this.signupData = {
        user_name: user_name,
        user_email: this.mainFormData.user_email,
        user_password: this.mainFormData.user_password,
        user_role: formValue.sell,
        user_phone: formValue.Phone,
        address: formValue.address,
        storename: formValue.storename,
        city_id: formValue.city,
      }
  
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
      
		} else {
			return;
		}
	}
onSelect(event: any) {
    this.showStore = true;
  }
  onCheck(event: any) {
    this.showStore = false;
  }

}


