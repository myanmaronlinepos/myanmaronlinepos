import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatTable} from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormGroup, FormControl } from '@angular/forms';
import { FormStyle } from '@angular/common';
import { element } from '@angular/core/src/render3';


@Component({
  selector: 'app-assignproduct',
  templateUrl: './assignproduct.component.html',
  styleUrls: ['./assignproduct.component.scss']
})
export class AssignproductComponent implements OnInit {

  // displayedColumns: string[] = ['assignproducts'];
  assignproducts =ELEMENT_DATA;
  filteredproducts=ELEMENT_DATA;
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
      products.assignproduct.toLowerCase().indexOf(searchproduct.toLowerCase())!==-1);
  }


  constructor() { }

  ngOnInit() {
   this.filteredproducts=this.assignproducts;
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

export interface PeriodicElement {
  assignproduct: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{ assignproduct: 'Ruby' },
{ assignproduct: 'Lucky Strike' },
{ assignproduct: 'Kent' },
{ assignproduct: 'ESSE' },
{ assignproduct: 'Myanmar' },
{ assignproduct: 'Grand Royal' },
{ assignproduct: 'Ruby' },
{ assignproduct: 'Lucky Strike' },
{ assignproduct: 'Kent' },
{ assignproduct: 'ESSE' },
{ assignproduct: 'Coffee' },
{ assignproduct: 'Strawberry Ice-Cream' },
{ assignproduct: 'chocolate Ice-Cream' },
{ assignproduct: 'Grape Ice-Cream' },
{ assignproduct: 'Milk Ice-Cream' },
{ assignproduct: 'Cake' },
];
