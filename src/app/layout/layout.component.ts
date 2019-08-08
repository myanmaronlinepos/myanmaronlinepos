import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  viewmenu=false;
  showmenu=false;
  constructor() { }

  ngOnInit() {
  }

  viewMenu() {
    this.viewmenu=!this.viewmenu;  
  }

  showMenu() {
    this.showmenu= !this.showmenu;
  }

  
  
}
