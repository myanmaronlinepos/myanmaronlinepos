import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NewCategoryComponent } from '../new-category/new-category.component';
import { AssignproductComponent } from 'src/app/assignproduct/assignproduct.component';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent implements OnInit {

  displayedColumns: string[] = ['categoryname','assignproduct','btn'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) {}

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
      height: '500px',
      width: '700px'
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result=='save')
        window.alert("Save Successful!");

    });
}

  ngOnInit() {}

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

