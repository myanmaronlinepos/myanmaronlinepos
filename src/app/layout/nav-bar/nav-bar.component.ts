import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { AuthService } from 'src/app/share/services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  
})
export class NavBarComponent implements OnInit {

  sidebarVisble=false;
  viewList=false;

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout().subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/home']);
      },
      error => {
        console.log(error);
      }
    )
  }

  toggle() {
    console.log("toogled");
    this.sidebarVisble=!this.sidebarVisble;
  }

  Shopkeeper() {
    this.viewList=!this.viewList;
  }

}
