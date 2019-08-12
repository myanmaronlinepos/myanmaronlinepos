import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/share/services/authentication.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/share/models/User';
import { DataFetchService } from 'src/app/share/services/data-fetch.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  addProfieData: User;
  imgSrc: string = 'assets/placeholder.jpg';
  selectedImage: any = null;

  processFile( event: any ) {
    if( event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    }
    else {
      this.imgSrc = 'assets/placeholder.jpg';
      this.selectedImage = null;
    }
  }
  
  changepwd=false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private dataFetchService: DataFetchService) { }

  ngOnInit() {
    // this.profileForm = new FormGroup ({
    //   'name':new FormControl(null, Validators.required),
    //   'shopName':new FormControl(null, Validators.required),
    //   'address':new FormControl(null),
    //   'city':new FormControl(null, Validators.required),
    //   'email':new FormControl(null, Validators.required),
    //   'ph':new FormControl(null, Validators.required),
    //   'imageurl':new FormControl(null, Validators.required)

    // });
  }
  // onSubmit() {
  //   const formValue = this.profileForm.value;

  //   this.addProfieData= {
  //     product_id: 1,
  //     product_name: formValue.productName,
  //     category_id: formValue.category,
  //     tag_id: formValue.tag,
  //     price_cost: formValue.cost,
  //     price_sell: formValue.sale,
  //     imageurl: formValue.imageurl,
  //     created_at: '',
  //     updated_at: '',
  // }


    // this.dataFetchService.(this.addProfieData)
    //   .subscribe(
    //     response => {
    //     if(response) {
    //       this.router.navigate(['/dashboard/products/allproducts']);
    //     }

    //   },
    //   error => {
    //     console.log(error);
    //     this.productNameError=error.error.product_name;
    //   }

    //   )
  // }

  changePassword():void {
    this.changepwd=!this.changepwd;
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

}
