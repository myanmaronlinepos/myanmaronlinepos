import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/share/services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

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

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
  }

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
