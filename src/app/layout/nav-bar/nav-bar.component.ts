import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  
})
export class NavBarComponent implements OnInit {

  sidebarVisble=false;
  viewList=false;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    console.log("toogled");
    this.sidebarVisble=!this.sidebarVisble;
  }

  Shopkeeper() {
    this.viewList=!this.viewList;
  }

}
