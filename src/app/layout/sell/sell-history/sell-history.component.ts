import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { History } from 'src/app/share/models/History';
import { SellHistoryService } from 'src/app/share/services/sell-history.service';
import { DataFetchService } from 'src/app/share/services/data-fetch.service';

@Component({
  selector: 'app-sell-history',
  templateUrl: './sell-history.component.html',
  styleUrls: ['./sell-history.component.scss']
})
export class SellHistoryComponent implements OnInit {
 
  displayedColumns: string[] = ['number', 'name', 'quantity', 'cost', 'sale','total','sellprice','profit'];
  sellHistory:any[]=[];
  dataSource: MatTableDataSource<any>;
  @ViewChild (MatPaginator) paginator: MatPaginator;

  constructor(
    private sellhistory: SellHistoryService,
    private dataFetchService:DataFetchService
  ){}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {

    //fetch all category data
    this.dataFetchService.getSellHistory().subscribe(
      response => {
        console.log(response);
        this.sellHistory=response;
        this.dataSource=new MatTableDataSource<any>(this.sellHistory);
        this.dataSource.paginator = this.paginator;
      },
      error => {
        console.log(error);
      }
    );

  }
 
}
