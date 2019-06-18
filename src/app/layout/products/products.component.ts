import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'category', 'discount','tags','quantity','price'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  default='All Category';
  ngOnInit() {
      this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  category: string;
  discount: string;
  tags:string;
  quantity:number;
  price:number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Super', category: 'Coffee', discount: '5%',tags:'for all',quantity:500,price:2900},
  {position: 2, name: 'Premier', category: 'Coffee', discount: '5%',tags:'for all',quantity:500,price:2900},
  {position: 3, name: 'Royal Myanmar', category: 'Coffee', discount: '5%',tags:'for all',quantity:500,price:2900},
  {position: 4, name: 'Gold Roast', category: 'Coffee', discount: '5%',tags:'for all',quantity:500,price:2900},
  {position: 5, name: 'Necafe', category: 'Coffee', discount: '5%',tags:'for all',quantity:500,price:2900},
  {position: 6, name: 'All Time', category: 'Coffee', discount: '5%',tags:'for all',quantity:500,price:2900},
  {position: 7, name: 'Sunday', category: 'Coffee', discount: '5%',tags:'for all',quantity:500,price:2900},
  {position: 8, name: 'Platinium', category: 'Coffee', discount: '5%',tags:'for all',quantity:500,price:2900},
  {position: 9, name: 'PyinOo Lwin', category: 'Coffee', discount: '5%',tags:'for all',quantity:500,price:2900},
  {position: 10, name: 'Grand Palace', category: 'Coffee', discount: '5%',tags:'for all',quantity:500,price:2900},
  {position: 11, name: 'Royal Myanmar', category: 'Coffee', discount: '5%',tags:'for all',quantity:500,price:2900},
  {position: 12, name: 'Rich', category: 'Coffee', discount: '5%',tags:'for all',quantity:500,price:2900},
  {position: 13, name: 'black Coffee', category: 'Coffee', discount: '5%',tags:'for all',quantity:500,price:2900},
  {position: 14, name: 'Onetea', category: 'Coffee', discount: '5%',tags:'for all',quantity:500,price:2900},
  {position: 15, name: 'Cafe', category: 'Coffee', discount: '5%',tags:'for all',quantity:500,price:2900},
  
];