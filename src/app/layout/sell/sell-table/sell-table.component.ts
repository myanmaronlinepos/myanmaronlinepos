import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { SellItem } from 'src/app/share/models/SellItem';
import { ItemCategory } from 'src/app/share/models/itemCategory';
import { SellService } from 'src/app/share/services/sell.service';
import { getPluralCategory } from '@angular/common/src/i18n/localization';


@Component({
  selector: 'app-sell-table',
  templateUrl: './sell-table.component.html',
  styleUrls: ['./sell-table.component.scss']
})
export class SellTableComponent implements OnInit {

  selectedRow=[];
  displayedColumns: string[] = ['number', 'name', 'category', 'tag', 'quantity','price'];
  tags:string[]=["3 buy 1 get", "for 18+", "for all"];
  categories:ItemCategory[]=[];
  category:string;
  items:SellItem[]=[];
  checkboxes:SellItem[]=[];
  dataSource: MatTableDataSource<SellItem>;
  
  
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private route: ActivatedRoute, 
    private sellservice: SellService,
    private router:Router
    ) {}

 

  ngOnInit() {
    this.selectedRow=this.sellservice.getSellItem();
    this.checkboxes=this.sellservice.getItems();
    this.items=this.sellservice.getItems();
    this.dataSource=new MatTableDataSource<SellItem>(this.items);
    this.dataSource.paginator = this.paginator;
    console.log(this.selectedRow.length);
  }


  sellItem() {
    this.router.navigate(['/dashboard/sell/sell-stock'])
  }

  onClickRow(row) {
    if(!this.selectedRow.includes(row)){
     this.sellservice.addItem(row);  
     console.log(this.selectedRow);
    }else{
        this.sellservice.removeItem(row);
    }
    row.highlighted = !row.highlighted; 
  }
  
  checkedCategory(event) {
      const filter= event? event.source.value : null;
      this.items=this.items.filter(element => element.category == filter);
      this.dataSource=new MatTableDataSource<SellItem>(this.items);
      console.log(event.checked);
      console.log(filter);
      console.log(this.items);
  }

}
