import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { History } from 'src/app/share/models/History';
import { SellHistoryService } from 'src/app/share/services/sell-history.service';

@Component({
  selector: 'app-sell-history',
  templateUrl: './sell-history.component.html',
  styleUrls: ['./sell-history.component.scss']
})
export class SellHistoryComponent implements OnInit {

  displayedColumns: string[] = ['number', 'name', 'quantity', 'cost', 'sale','total','sellprice','profit'];
  sellHistory:History[]=[];
  dataSource: MatTableDataSource<History>;

  constructor(
    private sellhistory: SellHistoryService
  ){}

  ngOnInit() {
    this.sellHistory=this.sellhistory.getSellHistory();
    this.dataSource=new MatTableDataSource<History>(this.sellHistory);
  }
 
}
