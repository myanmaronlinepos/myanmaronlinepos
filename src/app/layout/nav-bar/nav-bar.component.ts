import { Component, OnInit, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { AuthService } from 'src/app/share/services/authentication.service';
import { Router } from '@angular/router';
import { User } from 'src/app/share/models/User';
import { useAnimation } from '@angular/animations';
import { DataFetchService } from 'src/app/share/services/data-fetch.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import {startWith, map} from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material';

export interface Item {
  name: string;
  link:string;
}

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
  searchForm = new FormControl();
  searchData: Item[]=[
    {name:'allproduct',link:'/dashboard/products/allproducts'},
    {name:'inventory',link:'/dashboard/products/inventory'},
    {name:'category',link:'/dashboard/products/category'},
    {name:'sell',link:'/dashboard/sell/sell-table'}
  ];
  
  detailBaseLink="/dashboard/products/detailproduct/";
  editBaseLink="/dashboard/products/editproduct/";
  
  filteredData: Observable<Item[]>;

  constructor(
    private authService:AuthService,
    public router:Router,
    private dataFetchService:DataFetchService,
    private sanitizer:DomSanitizer
    ) { }

  ngOnInit() {
    this.imgSrc="assets/shop1.jpg";
    this.fetchData();
    this.fetchImage();
    this.filteredData = this.searchForm.valueChanges.pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this._filter(name) : this.searchData.slice())
    );
  }

  private _filter(name: string): Item[] {
    const filterValue = name.toLowerCase();
    return this.searchData.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  routeSelectedItem(event: MatAutocompleteSelectedEvent) {
    console.log(event.option.value);
    const item=event.option.value;
    if(item) {
      this.router.navigate([item.link]);
    }
  }

  displayValue(item?: Item): string | undefined {
    return item ? item.name : undefined;
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
    );

    this.dataFetchService.getAllProduct().subscribe(
      response => {
          console.log(response);
          this.concatData(response);
      },
      error => {
        console.log(error);
      }
    )
  }

  concatData(productList) {

    if(productList) {
      productList.forEach(element => {
        const product_id=element.product_id;
        const product_name=element.product_name;
        const detail={
          name:product_name+"(Detail)",
          link:this.detailBaseLink+product_id
        }
        const edit={
          name:product_name+"(Edit)",
          link:this.editBaseLink+product_id
        }
        this.searchData.push(detail);
        this.searchData.push(edit);
      });
    }
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
