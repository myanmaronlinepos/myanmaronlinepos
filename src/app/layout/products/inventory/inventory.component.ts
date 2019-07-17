import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material';
import {MatTableDataSource} from '@angular/material/table';
export interface PeriodicElement {
  name: string;
  no: number;
  quantity: number;
  category: string;
  updatequantity:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {no: 1, name: 'point',category : 'sunflowerseeds', quantity:1000,updatequantity:''},
  {no: 2, name: 'point',category : 'sunflowerseeds', quantity:1000,updatequantity:''},
  {no: 3, name: 'point',category : 'sunflowerseeds', quantity:1000,updatequantity:''},
  {no: 4, name: 'point',category : 'sunflowerseeds', quantity:1000,updatequantity:''},
  {no: 5, name: 'point',category : 'sunflowerseeds', quantity:1000,updatequantity:''},
  {no: 6, name: 'point',category : 'sunflowerseeds', quantity:1000,updatequantity:''},
  {no: 7, name: 'point',category : 'sunflowerseeds', quantity:1000,updatequantity:''},
  {no: 8, name: 'point',category : 'sunflowerseeds', quantity:1000,updatequantity:''},
  {no: 9, name: 'point',category : 'sunflowerseeds', quantity:1000,updatequantity:''},
  {no: 10, name: 'point',category : 'sunflowerseeds', quantity:1000,updatequantity:''},
  {no: 11, name: 'point',category : 'sunflowerseeds', quantity:1000,updatequantity:''},
  {no: 12, name: 'point',category : 'sunflowerseeds', quantity:1000,updatequantity:''},
  {no: 13, name: 'point',category : 'sunflowerseeds', quantity:1000,updatequantity:''},
  {no: 14, name: 'point',category : 'sunflowerseeds', quantity:1000,updatequantity:''},
  {no: 15, name: 'point',category : 'sunflowerseeds', quantity:1000,updatequantity:''},
  {no: 16, name: 'point',category : 'sunflowerseeds', quantity:1000,updatequantity:''},
  {no: 17, name: 'point',category : 'sunflowerseeds', quantity:1000,updatequantity:''},
  {no: 18, name: 'point',category : 'sunflowerseeds', quantity:1000,updatequantity:''},
  {no: 19, name: 'point',category : 'sunflowerseeds', quantity:1000,updatequantity:''},
  {no: 20, name: 'point',category : 'sunflowerseeds', quantity:1000,updatequantity:''},

];

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

displayedColumns: string[] = ['no', 'name', 'category', 'quantity','updatequantity'];
dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

Updatequantity='';
Savebuttonwork='';



@ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
   }
   onUpdatequantity(row: Event){
     this.Updatequantity=(<HTMLInputElement>event.target).value;
     }
     Onaddvalue(event: any){
       this.Savebuttonwork=this.Updatequantity;

     }

}

