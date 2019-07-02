import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NewCategoryComponent } from '../new-category/new-category.component';
import { MatPaginator } from '@angular/material';

import {MatCheckboxModule} from '@angular/material/checkbox';
import { AssignproductComponent } from '../../assignproduct/assignproduct.component';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent implements OnInit {

  displayedColumns: string[] = ['categoryname','assignproduct','btn'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  createCategory(): void {
    const dialogRef=this.dialog.open(NewCategoryComponent,{
      width: '500px',
      height: '300px' 
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

}

export interface PeriodicElement {
  categoryname: string;
  assignproduct:string;
  btn:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{ categoryname: 'Cigaretees', assignproduct:'',btn:''},
{ categoryname: 'Beer', assignproduct:'',btn:''},
{ categoryname: 'Rum', assignproduct:'',btn:''},
{ categoryname: 'Wisky', assignproduct:'',btn:''},
{ categoryname: 'Snack', assignproduct:'',btn:''}
];

