import { Component, OnInit } from '@angular/core';
import { DataFetchService } from '../share/services/data-fetch.service';
import { User } from '../share/models/User';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  viewmenu=false;
  showmenu=false;
  constructor(
    private dataFetchService:DataFetchService
  ) { }

  ngOnInit() {

  }

  

  viewMenu() {
    this.viewmenu=!this.viewmenu;  
  }

  showMenu() {
    this.showmenu= !this.showmenu;
  }

  
  
}
