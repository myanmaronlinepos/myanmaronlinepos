import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatTable} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NewCategoryComponent } from '../new-category/new-category.component';
import { MatPaginator } from '@angular/material';

import { AssignproductComponent } from '../../assignproduct/assignproduct.component';
import { EditCategoryComponent } from '../edit-category/edit-category.component';
import { ItemCategory } from 'src/app/share/models/itemCategory';
import { CategoryService } from 'src/app/category.service';
import { DeleteCategoryComponent } from '../delete-category/delete-category.component';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent implements OnInit {

  displayedColumns: string[] = ['categoryname','assignproduct','action'];
  categories:ItemCategory[]=[];
  dataSource: MatTableDataSource<ItemCategory>;
  
  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    public dialog: MatDialog,
    public categoryservice:CategoryService
    ) {}

  ngOnInit() {
    this.categories=this.categoryservice.getCategory();
    this.dataSource=new MatTableDataSource<ItemCategory>(this.categories);
    this.dataSource.paginator = this.paginator;
  }
  
  createCategory(action, obj) {
    obj.action= action;
    const dialogRef=this.dialog.open(NewCategoryComponent,{
      width: '500px',
      height: '280px', 
      data: obj 
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add')
        this.addRowData(result.data);
    });
  }

  assignProduct(): void {
    const dialogRef=this.dialog.open(AssignproductComponent,{
      height: '300px',
      width: '500px'
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result=='save')
        window.alert("Save Successful!");

    });
  }

  onEdit(action, obj):void {
    
    // this.categoryservice.setCategory(row);
    obj.action=action;
    const dialogRef=this.dialog.open(EditCategoryComponent,{
       width: '300px',
       data: obj
    });
    dialogRef.afterClosed().subscribe(result=> {
      if(result.event=='Edit') {
        this.editRowData(result.data);
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
      }
    });
  }

  addRowData(row_obj) {
    
    this.categories.push({
      id:this.categoryservice.getId()+1,
      categoryname:row_obj.categoryname
    });
    this.dataSource=new MatTableDataSource<ItemCategory>(this.categories);
    this.table.renderRows();
  }

  editRowData(row_obj) {
    this.categories = this.categories.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.categoryname = row_obj.categoryname;
      }
      return true;
    });
  }

  deleteRowData(row_obj) {
    this.categories=this.categories.filter((value,key)=>{
      return value.id != row_obj.id;
    });
    this.dataSource=new MatTableDataSource<ItemCategory>(this.categories);
  }
}





