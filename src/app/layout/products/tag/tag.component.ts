import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NewCategoryComponent } from '../new-category/new-category.component';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { AssignproductComponent } from '../../assignproduct/assignproduct.component';
import {MatTableDataSource, MatTable} from '@angular/material/table';
@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  displayedColumns: string[] = ['position','productname','tag','assignproduct','btn'];
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
  position:number;
  productname: string;
  tag:string;
  btn:string;
  assignproduct:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position:1, productname: 'Ruby', tag:'', assignproduct:'',btn:''},
{position:1, productname: 'Chocopile', tag:'3 buy 1 gift', assignproduct:'',btn:''},
{position:1, productname: 'premier', tag:'for all,5 buy 1 gift ', assignproduct:'',btn:''},
{position:1, productname: 'laptop', tag:'give a bag', assignproduct:'',btn:''},
{position:1, productname: 'phone', tag:'400000 mA powerbank as a gift', assignproduct:'',btn:''},


];


