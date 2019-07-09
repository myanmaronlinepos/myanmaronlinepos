import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {

  displayedColumns: string[] = ['date', 'before', 'addQuantity', 'sellQuantity', 'after','cost','sale'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() {}
 
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  date: string;
  before: number;
  addQuantity: number;
  sellQuantity: number;
  after: number;
  cost: number;
  sale: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
{ date: '1/7/2019', before:1000, addQuantity:10, sellQuantity:5, after:1005, cost:500, sale:600},
{ date: '1/7/2019', before:1000, addQuantity:10, sellQuantity:5, after:1005, cost:500, sale:600},
{ date: '1/7/2019', before:1000, addQuantity:10, sellQuantity:5, after:1005, cost:500, sale:600}
];
