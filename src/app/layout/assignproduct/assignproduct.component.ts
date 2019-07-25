import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatTable} from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormGroup, FormControl } from '@angular/forms';
import { FormStyle } from '@angular/common';


@Component({
  selector: 'app-assignproduct',
  templateUrl: './assignproduct.component.html',
  styleUrls: ['./assignproduct.component.scss']
})
export class AssignproductComponent implements OnInit {

  // displayedColumns: string[] = ['assignproducts'];
  assignproducts =ELEMENT_DATA;
  selectedArray=[];
  myform:FormGroup;
  

  constructor() {
    this.myform= new FormGroup({
      status: new FormControl()
    });
   }

  ngOnInit() {
  
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
