import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/share/services/authentication.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/share/models/User';
import { DataFetchService } from 'src/app/share/services/data-fetch.service';
import { DataPostService } from 'src/app/share/services/data-post.service';
import { MAT_DIALOG_SCROLL_STRATEGY_PROVIDER } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  user_image: FormGroup;
  change_password: FormGroup;
  addProfileData: User;
  imageformData: any;
  imgSrc: any = 'assets/placeholder.jpg';
  selectedImage: any = null;
  selectedOption=1;
  data: any;
  cities: any;
  changepwd = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private dataFetchService: DataFetchService,
    private dataPostService: DataPostService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.fetchCity();
    this.profileForm = new FormGroup({
      'user_name': new FormControl(null),
      'storename': new FormControl(null),
      'address': new FormControl(null),
      'city': new FormControl(null),
      'user_email': new FormControl(null),
      'user_phone': new FormControl(null),
    });

    this.user_image = new FormGroup({
      'imageurl': new FormControl(null)
    });
    
    
    this.change_password = new FormGroup({
      'current_password': new FormControl(null, Validators.required),
      'new_password': new FormControl(null, Validators.required),
      'new_password_retype': new FormControl(null, Validators.required)
    });

    this.fetchData();
    
    // this.formValid();
  }

  // formValid() {
  //   this.profileForm.valueChanges.subscribe(result => {
  //     if (this.profileForm.status == "INVALID") {
  //       this.enableSave=false;
  //     } else if (this.profileForm.status == "VALID") {
  //       this.enableSave=true;
  //     }
  //   });
  // }

  processFile(event: any) {

    if (event.target.files && event.target.files[0]) {

      const file = event.target.files[0];
      this.imageformData = file;
      var reader = new FileReader();
      reader.readAsDataURL(file); 
      reader.onload = (_event) => { 
        this.imgSrc = reader.result; 
      }
    }
    else {
      this.imgSrc = 'assets/placeholder.jpg';
      this.selectedImage = null;
    }
  }
  onSave() {
    const formValue = this.data;

    this.addProfileData = {
      user_name: formValue.user_name,
      storename: formValue.storename,
      user_email: formValue.user_email,
      user_password: '',
      user_role: 1,
      user_phone: formValue.user_phone,
      address: formValue.address,
      city_id: this.selectedOption
    }

    
    console.log(this.addProfileData);

    if (this.addProfileData) {
      this.updateUserData();
    }

    if (this.changepwd) {
      this.updatePassword();
    }
    if (this.imageformData != null) {
      this.updateUserImage();
    }
  }

  updateUserData() {
    this.dataPostService.updateUserData(this.addProfileData)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );

  }

  updateUserImage() {

    var formData = new FormData();
    formData.append("user_image", this.imageformData);
    this.dataPostService.updateUserImage(formData).subscribe(
      response => {
        console.log(response);
        alert("User data save successfully");
        let objectURL = URL.createObjectURL(response);
        this.imgSrc = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      },
      error => {
        console.log(error);
      }
    )
  }

  updatePassword() {
    const passwords = {
      'password_old': '',
      'password': ''
    };
    this.authService.changePassword(passwords).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }

  fetchData() {
    this.dataFetchService.getUserData().subscribe(
      response => {
        this.data = response;
        this.selectedOption=this.data.city_id;
        console.log(this.selectedOption);
        console.log(this.data);
      },
      error => {
        console.log(error);
      }
    );

    this.dataFetchService.getUserImage().subscribe(
      response => {
        let objectURL = URL.createObjectURL(response);
        this.imgSrc = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      },
      error => {
        console.log(error);
      }
    );

  }


  changePassword(): void {
    this.changepwd = !this.changepwd;
  }

  logout() {
    this.authService.logout().subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/home/login']);
      },
      error => {
        console.log(error);
      }
    )
  }

  fetchCity() {
    this.dataFetchService.getAllCity().subscribe(
      response => {
        this.cities= response;
        console.log(this.cities);
      },
      error => {
        console.log(error);
      }
    );
  }

}
