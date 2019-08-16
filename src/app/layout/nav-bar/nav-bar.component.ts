import { Component, OnInit, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { AuthService } from 'src/app/share/services/authentication.service';
import { Router } from '@angular/router';
import { User } from 'src/app/share/models/User';
import { useAnimation } from '@angular/animations';
import { DataFetchService } from 'src/app/share/services/data-fetch.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  
})
export class NavBarComponent implements OnInit {

  sidebarVisble=false;
  imgSrc:any;
  viewList=false;
  userData:any;
  constructor(
    private authService:AuthService,
    private router:Router,
    private dataFetchService:DataFetchService,
    private sanitizer:DomSanitizer
    ) { }

  ngOnInit() {
    this.imgSrc="assets/shop1.jpg";
    this.fetchData();
    this.fetchImage();
  }

  fetchImage() {
    this.dataFetchService.getUserImage().subscribe(
      response => {
        let objectURL = URL.createObjectURL(response);       
        this.imgSrc = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      },
      error => {
        console.log(error);
      }
    )
  }

  fetchData() {
    this.dataFetchService.getUserData().subscribe(
      response => {
        this.userData= response;
        console.log(this.userData);
      },
      error => {
          console.log(error);
      }
    )
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

  toggle() {
    console.log("toogled");
    this.sidebarVisble=!this.sidebarVisble;
  }

  Shopkeeper() {
    this.viewList=!this.viewList;
  }

}
