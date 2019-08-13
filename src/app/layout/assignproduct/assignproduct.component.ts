import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatTable} from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormGroup, FormControl } from '@angular/forms';
import { FormStyle } from '@angular/common';
import { element } from '@angular/core/src/render3';
import { DataFetchService } from 'src/app/share/services/data-fetch.service';


@Component({
  selector: 'app-assignproduct',
  templateUrl: './assignproduct.component.html',
  styleUrls: ['./assignproduct.component.scss']
})
export class AssignproductComponent implements OnInit {

  // displayedColumns: string[] = ['assignproducts'];
  assignproducts: any;
  filteredproducts: any;
  selectedArray=[];
  myform:FormGroup;
  private _filteredValue ='';
   
  get filteredValue(): string {
    return this._filteredValue;
  }
  set filteredValue(value:string) {
    this._filteredValue=value;
    this.filteredproducts=this.filtereproducts(value);
  }

  filtereproducts(searchproduct: string) {
    return this.assignproducts.filter(products=>
      products.assignproducts.product_name.toLowerCase().indexOf(searchproduct.toLowerCase())!==-1);
  }


  constructor(
    private dataFetchService: DataFetchService
  ) { }

  ngOnInit() {
    this.fetchData();
    this.filteredproducts=this.assignproducts;
  }

  
  fetchData() {
    this.dataFetchService.getAllProduct().subscribe(
      response => {
        this.assignproducts= response;
        this.filteredproducts= response;
        console.log(this.assignproducts);
        
      },
      error => {
        console.log(error);
      }
    )
  }
  
  
  showOptions($event) {
    if(!this.selectedArray.includes($event.source.id)){
      this.selectedArray.push($event.source.id);
    }else{
        const index=this.selectedArray.indexOf($event.source.id);
        this.selectedArray.splice(index,1);
    }
    console.log($event);
  }

  
  // filter(filterValue: string) {
  //   if(filterValue!==null) {
  //     this.filteredproduct=this.assignproducts.filter(element=> element.assignproduct==filterValue);
  //     console.log(this.assignproducts);
  //   }
  //   else {
  //     this.filteredproduct=this.assignproducts;
  //   }
  // }

}
