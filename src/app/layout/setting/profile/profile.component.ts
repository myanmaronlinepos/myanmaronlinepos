import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/share/services/authentication.service';
import { Router } from '@angular/router';

class ImageSnippet {
  constructor(public src: string, public file: File){}
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  selectedFile: ImageSnippet;

  processFile(imageInput: any) {
    const file: File= imageInput.files[0];
    const reader= new FileReader();

    reader.addEventListener('load',(event: any)=> {
      this.selectedFile=new ImageSnippet(event.target.result, file);
      // console.log(event);
      // console.log(this.selectedFile.src);
    });
    reader.readAsDataURL(file);
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
