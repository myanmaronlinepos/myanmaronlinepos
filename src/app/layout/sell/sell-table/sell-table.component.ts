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
import { AngularMaterialModule } from 'src/app/share/angular-material.module';
import { Product } from 'src/app/share/models/Product';


@Component({
  selector: 'app-sell-table',
  templateUrl: './sell-table.component.html',
  styleUrls: ['./sell-table.component.scss']
})
export class SellTableComponent implements OnInit {

  selectedRow= [];
  displayedColumns: string[] = ['number', 'product_name', 'category_name', 'tag_name', 'quantity', 'price_sell'];
  dataSource: any;
  categories: any;
  tags: any;
  allproduct:any;
  selected_category: any=[];
  category_filtr:any=[];
  selected_tag: any=[];
  tag_filtr: any=[];
  items:SellProduct[]=[];

  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private route: ActivatedRoute, 
    private sellservice: SellService,
    private dataFetchService: DataFetchService,
    private router:Router
    ) {}

 

  ngOnInit() {

    this.fetchData();
    // this.fetchCategoryData();
    // this.fetchTagData();
    // this.selectedRow=this.sellservice.sellProduct;
    // this.checkboxes=this.sellservice.getItems();
    // this.items=this.sellservice.getItems();
    // this.dataSource=new MatTableDataSource<SellItem>(this.selected_products);
    // this.dataSource.paginator = this.paginator;
    // this.selected_products=this.items;
  }

  getSelectedCategory(category) {
    if (!this.selected_category.includes(category)) {
      this.selected_category.push(category);
      console.log(this.selected_category);
    } else {

      const index = this.selected_category.indexOf(category);
      this.selected_category.splice(index, 1);
    }
    this.bindData();
  }

  bindData() {
    this.category_filtr=[];
    this.selected_category.forEach(item => {
       const result = this.allproduct.filter(element => {
       return element.category_name === item.category_name;
       });
       console.log("result.....");
       console.log(result);
       this.category_filtr=this.category_filtr.concat(result);
    });

    console.log("length="+this.selected_category.length);
    if(this.selected_category.length>0) {
      this.dataSource = new MatTableDataSource<Product>(this.category_filtr);
      this.dataSource.paginator = this.paginator;
      return;
    }
    
    this.dataSource = new MatTableDataSource<Product>(this.allproduct);
    this.dataSource.paginator = this.paginator;
  }

  getSelectedTag(tag) {
    if (!this.selected_tag.includes(tag)) {
      this.selected_tag.push(tag);
      console.log(this.selected_tag);
    } else {

      const index = this.selected_tag.indexOf(tag);
      this.selected_tag.splice(index, 1);
    }
    this.bindTagData();
  }

  bindTagData() {
    this.tag_filtr=[];
    this.selected_tag.forEach(item => {
       const result = this.allproduct.filter(element => {
       return element.tag_name === item.tag_name;
       });
       console.log("result.....");
       console.log(result);
       this.tag_filtr=this.tag_filtr.concat(result);
    });

    console.log("length="+this.selected_tag.length);
    if(this.selected_tag.length>0) {
      this.dataSource = new MatTableDataSource<Product>(this.tag_filtr);
      this.dataSource.paginator = this.paginator;
      return;
    }
    
    this.dataSource = new MatTableDataSource<Product>(this.allproduct);
    this.dataSource.paginator = this.paginator;
  }

  sellItem() {
    if(this.selectedRow.length > 0){
      this.sellservice.sellProduct=this.selectedRow;
      this.router.navigate(['/dashboard/sell/sell-stock'])
    }
    else{
      alert("Please select at least one product to sell!");
    }
  }

  onClickRow(row) {
  
    if(!this.selectedRow.includes(row)){
      this.selectedRow.push(row);
      console.log(this.selectedRow);
    }else {

     const index=this.selectedRow.indexOf(row);
     this.selectedRow.splice(index,1);
    }
    
    row.highlighted = !row.highlighted; 
  }

  fetchData() {

    //fetch all category data
    this.dataFetchService.getAllCategory().subscribe(
      response => {
        console.log(response);
        this.categories=response;
      },
      error => {
        console.log(error);
      }
    )

    //fetch all tag data
    this.dataFetchService.getAllTag().subscribe(
      response => {
        console.log(response);
        this.tags= response;
      },
      error => {
        console.log(error);
      }
    )
    
    this.dataFetchService.getAllSell().subscribe(
      response => {
        console.log(response);
        this.allproduct= response;
        this.dataSource = new MatTableDataSource<SellProduct>(this.allproduct);
        this.dataSource.paginator = this.paginator;
      },
      error => {
        console.log(error);
      }
    )
  }

  // fetchCategoryData() {
  //   this.dataFetchService.getAllCategory().subscribe(
  //     response => {
  //       console.log(response);
  //       this.categories = response;
  //     },
  //     error => {

  //     }
  //   )
  // }

  // fetchTagData() {
  //   this.dataFetchService.getAllTag().subscribe(
  //     response => {
  //       console.log(response);
  //       this.tags = response;
  //     },
  //     error => {

  //     }
  //   )
  // }
  
}
