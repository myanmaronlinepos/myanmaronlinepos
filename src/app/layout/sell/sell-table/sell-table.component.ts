import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { SellService } from 'src/app/sell.service';

@Component({
  selector: 'app-sell-table',
  templateUrl: './sell-table.component.html',
  styleUrls: ['./sell-table.component.scss']
})
export class SellTableComponent implements OnInit {

  selectedRow=[];
  displayedColumns: string[] = ['number', 'name', 'category', 'tag', 'quantity','price'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private route: ActivatedRoute, 
    private sellservice: SellService,
    private router:Router
    ) {}

 

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  sellItem() {
    this.sellservice.stock.emit("Sunflower Seeds");
    this.router.navigate(['/dashboard/sell/sell-stock'])
  }

  onClickRow(row) {
    if(!this.selectedRow.includes(row.number)){
      this.selectedRow.push(row.number);
      console.log(row.number);
    }else{
        const index=this.selectedRow.indexOf(row.number);
        this.selectedRow.splice(index,1);
    }
    
  }
  
 
}

export interface PeriodicElement {
  number: number;
  name: string;
  category: string;
  tag: string;
  quantity: number;
  price: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {number: 1, name: 'Ruby', category: 'Cigaretts', tag: 'for 18+', quantity: 1000, price: 1000},
  {number: 2, name: 'Point', category: 'Sunflower Seeds', tag: '', quantity: 10, price: 500},
  {number: 3, name: 'Point', category: 'Sunflower Seeds', tag: '', quantity: 8, price: 500},
  {number: 4, name: 'Lucky Strike', category: 'Cigaretts', tag: 'for 18+', quantity: 20, price: 1000},
  {number: 5, name: 'Myanmar Tin', category: 'Beer', tag: 'for 18+', quantity: 1000, price: 2000}
];
