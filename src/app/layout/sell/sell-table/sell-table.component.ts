import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatTable} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { SellItem } from 'src/app/share/models/SellItem';
import { ItemCategory } from 'src/app/share/models/ItemCategory';
import { SellService } from 'src/app/share/services/sell.service';
import { DataFetchService } from 'src/app/share/services/data-fetch.service';
import { SellProduct } from 'src/app/share/models/SellProduct';


@Component({
  selector: 'app-sell-table',
  templateUrl: './sell-table.component.html',
  styleUrls: ['./sell-table.component.scss']
})
export class SellTableComponent implements OnInit {

  selectedRow=[];
  displayedColumns: string[] = ['number', 'product_name', 'category_name', 'tag_name', 'quantity', 'price_sell'];
  tags:string[]=["3 buy 1 get", "for 18+", "for all"];
  // categories:ItemCategory[]=[];
  // category:string;
  // items:SellItem[]=[];
  // checkboxes:SellItem[]=[];
  dataSource:any;
  // selected_products:SellItem[]=[];
  // selected:boolean=false;

  // private _filteredValue ='';
      
  // get filteredValue(): string {
  //   return this._filteredValue;
  // }
  // set filteredValue(value:string) {
  //   this._filteredValue=value;
  //   this.products=this.filtereproducts(value);
  // }

  // filtereproducts(searchproduct: string) {
  //   return this.products.filter(products=>
  //     products.category.toLowerCase().indexOf(searchproduct.toLowerCase())!==-1);
  // }
  // checkedCategory (searchproduct) {
  //   return this.items.filter(products=>
  //     products.category.toLowerCase().indexOf(searchproduct.toLowerCase())!==-1);
  // }

  // getSelected() {
  //   this.selected_products = this.items.filter(s => {
  //     return s.selected;
  //   });
  // }

  
  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private route: ActivatedRoute, 
    // private sellservice: SellService,
    private dataFetchService: DataFetchService,
    private router:Router
    ) {}

 

  ngOnInit() {

    this.fetchData();

    // this.selectedRow=this.sellservice.sellProduct;
    // this.checkboxes=this.sellservice.getItems();
    // this.items=this.sellservice.getItems();
    // this.dataSource=new MatTableDataSource<SellItem>(this.selected_products);
    // this.dataSource.paginator = this.paginator;
    
    // this.selected_products=this.items;
    
  }
  

  // getSelected() {
  //   this.selected_products = this.items.filter(s => {
  //     return s.selected;
  //   });
  //   console.log(this.selected_products);
    
  // }

  // sellItem() {
  //   if(this.selectedRow.length > 0){
  //     this.sellservice.sellProduct=this.selectedRow;
  //     this.router.navigate(['/dashboard/sell/sell-stock'])
  //   }
  //   else{
  //     alert("Please select at least one product to sell!");
  //   }
  // }

  

  // onClickRow(row) {
  
  //   if(!this.selectedRow.includes(row)){
  //     this.selectedRow.push(row);
  //     console.log(this.selectedRow);
  //   }else {

  //    const index=this.selectedRow.indexOf(row);
  //    this.selectedRow.splice(index,1);
  //   }
    
  //   row.highlighted = !row.highlighted; 
  // }
  
  // checkedCategory(event) {
  //     const filter= event? event.source.value : null;
  //     this.items=this.items.filter(element =>  element.category == filter);
  //     this.dataSource=new MatTableDataSource<SellItem>(this.items);
  // }

  fetchData() {
    this.dataFetchService.getAllSell().subscribe(
      response => {
        console.log(response);
        this.dataSource = new MatTableDataSource<SellProduct>(response);
        this.dataSource.paginator = this.paginator;
      },
      error => {

      }
    )
  }

}
