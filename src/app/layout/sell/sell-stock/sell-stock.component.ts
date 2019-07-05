import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { SellService } from 'src/app/sell.service';

@Component({
  selector: 'app-sell-stock',
  templateUrl: './sell-stock.component.html',
  styleUrls: ['./sell-stock.component.scss']
})
export class SellStockComponent implements OnInit {

  displayedColumns: string[] = ['number', 'name', 'quantity','price'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private route: ActivatedRoute, private sellservice: SellService) {
    this.sellservice.stock.subscribe(
      (stock: string)=> alert(stock)
    );
   }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  number: number;
  name: string;
  quantity: number;
  price: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {number: 1, name: 'Ruby', quantity: 1000, price: 1000},
  {number: 2, name: 'Point', quantity: 10, price: 500},
  {number: 3, name: 'Point', quantity: 8, price: 500},
  {number: 4, name: 'Lucky Strike', quantity: 20, price: 1000},
  {number: 5, name: 'Myanmar Tin', quantity: 1000, price: 2000}
];

