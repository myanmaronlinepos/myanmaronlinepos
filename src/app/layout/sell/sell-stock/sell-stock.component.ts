import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { SellService } from 'src/app/sell.service';
import { SellItem } from 'src/app/share/models/SellItem';

@Component({
  selector: 'app-sell-stock',
  templateUrl: './sell-stock.component.html',
  styleUrls: ['./sell-stock.component.scss']
})
export class SellStockComponent implements OnInit {

  displayedColumns: string[] = ['number', 'name', 'quantity','price','totalprice'];
  items:SellItem[]=[];
  dataSource : MatTableDataSource<SellItem>;
  selectedRow:number[]=[];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private route: ActivatedRoute,
    private sellservice: SellService
    ) {}

  ngOnInit() {
    this.items=this.sellservice.getSellItem();
    this.dataSource=new MatTableDataSource<SellItem>(this.items);
    this.dataSource.paginator = this.paginator;
  }

  // getTotalCost() {
  //   return this.items.map(t => t.price).reduce((acc, value) => acc + value, 0);
  // }
}




