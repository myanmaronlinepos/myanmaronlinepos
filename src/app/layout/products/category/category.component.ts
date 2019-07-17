import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NewCategoryComponent } from '../new-category/new-category.component';
import { MatPaginator } from '@angular/material';

import {MatCheckboxModule} from '@angular/material/checkbox';
import { AssignproductComponent } from '../../assignproduct/assignproduct.component';
import { EditCategoryComponent } from '../edit-category/edit-category.component';
import { ItemCategory } from 'src/app/share/models/itemCategory';
import { CategoryService } from 'src/app/category.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent implements OnInit {

  displayedColumns: string[] = ['categoryname','assignproduct','btn'];
  categories:ItemCategory[]=[];
  dataSource: MatTableDataSource<ItemCategory>;

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

  delete(element) {
    this.dataSource.data = this.dataSource.data
      .filter(i => i !== element)
      .map((i, idx) => (i.id = (idx + 1), i));
    console.log(this.dataSource.data);
    console.log("deleted"+element);
  }
  
  createCategory(): void {
    const dialogRef=this.dialog.open(NewCategoryComponent,{
      width: '500px',
      height: '280px' 
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result=='save')
        window.alert("Save Successful!");
        
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

  onEdit(row:ItemCategory):void {
    
    this.categoryservice.setCategory(row);
     const dialogRef=this.dialog.open(EditCategoryComponent,{
       width: '300px',
     });
    dialogRef.afterClosed().subscribe(result=> {
      
    })
  }
}




