import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatTable} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NewCategoryComponent } from '../new-category/new-category.component';
import { MatPaginator } from '@angular/material';

import { AssignproductComponent } from '../../assignproduct/assignproduct.component';
import { EditCategoryComponent } from '../edit-category/edit-category.component';
// import { ItemCategory } from 'src/app/share/models/itemCategory';
import { Product } from 'src/app/share/models/Product';
// import { CategoryService } from 'src/app/category.service';
import { DataFetchService } from 'src/app/share/services/data-fetch.service';
import { DeleteCategoryComponent } from '../delete-category/delete-category.component';
import { Category } from 'src/app/share/models/Category';
import { DataPostService } from 'src/app/share/services/data-post.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent implements OnInit {

  displayedColumns: string[] = ['category_name','assignproduct','action'];
  categories:Category[]=[];
  category:any;
  dataSource: any;
  
  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    public dialog: MatDialog,
    public dataFetchService:DataFetchService,
    private dataPostService:DataPostService
    ) {}

  ngOnInit() {
    // this.categories=this.categoryservice.getCategory();
    // this.dataSource=new MatTableDataSource<ItemCategory>(this.categories);
    // this.dataSource.paginator = this.paginator;
    this.fetchData();
  }
  
  createCategory(action, obj) {
    obj.action= action;
    const dialogRef=this.dialog.open(NewCategoryComponent,{
      width: '500px',
      height: '270px',
      data: obj 
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add')
        this.addRowData(result.data);
    });
  }

  assignProduct(element): void {
    const dialogRef=this.dialog.open(AssignproductComponent,{
      width: '500px',
      data:element
    });

  }

  onEdit(action, obj):void {
    
    // this.categoryservice.setCategory(row);
    obj.action=action;
    const dialogRef=this.dialog.open(EditCategoryComponent,{
       width: '300px',
       height: '180px',
       data: obj
    });
    dialogRef.afterClosed().subscribe(result=> {
      if(result.event=='Edit') {
        this.editRowData(result.data);
        this.dataPostService.updateCategory(result.data).subscribe(
          response => {
            this.fetchData();
            console.log(result.data);
          },
          error => {
            console.log(error);
          }
        );
      }
    });
  }

  onDelete(action, obj) {
    obj.action= action;
    const dialogRef=this.dialog.open(DeleteCategoryComponent,{
      width: '320px',
      height: '130px',
      data: obj
    });


    dialogRef.afterClosed().subscribe(result => {
      if(result.event=='Delete') {
        this.deleteRowData(result.data);
        this.dataPostService.deleteCategory(result.data).subscribe(
          response => {
            this.fetchData();
            console.log(result.data);
          },
          error => {
            console.log(error);
          }
        );
      }
    });
  }

  addRowData(row_obj) {

    console.log(row_obj);
     this.category={
      category_name:row_obj.category_name
    };

    this.dataPostService.postCategory(this.category).subscribe(
      response => {
        this.fetchData()
      },
      error => {
        console.log(error);
      }
    );
  }

  editRowData(row_obj) {
    this.categories = this.categories.filter((value,key)=>{
      if(value.category_id == row_obj.category_id){
        value.category_name = row_obj.category_name;
      }
      return true;
    });
  }

  deleteRowData(row_obj) {
    this.categories=this.categories.filter((value,key)=>{
      return value.category_id != row_obj.id;
    });
    this.dataSource=new MatTableDataSource<Category>(this.categories);
  }

  fetchData() {
    this.dataFetchService.getAllCategory().subscribe(
      response => {
        console.log(response);
        this.dataSource = new MatTableDataSource<Category>(response);
        this.dataSource.paginator = this.paginator;
        console.log(this.dataSource);
      },
      error => {

      }
    )
  }
}





