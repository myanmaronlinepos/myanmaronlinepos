import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import {MatTableDataSource, MatTable} from '@angular/material/table';
import { NewTagsComponent} from '../new-tags/new-tags.component';



@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  displayedColumns: string[] = ['position','productname','tag','btn'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  i=0;
  id :string;
  listOfData: any[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(public dialog: MatDialog) {}

  deleteRow(id: string): void {
    this.listOfData = this.listOfData.filter(d => d.id !== id);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  
  createTags(): void {
    const dialogRef=this.dialog.open(NewTagsComponent,{
      width: '500px',
      height: '350px' 
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
  
}

const ELEMENT_DATA: PeriodicElement[] = [
{position:1, productname: 'Ruby', tag:'',btn:''},
{position:2, productname: 'Chocopile', tag:'3 buy 1 gift',btn:''},
{position:3, productname: 'premier', tag:'for all,5 buy 1 gift ',btn:''},
{position:4, productname: 'laptop', tag:'give a bag', btn:''},
{position:5, productname: 'phone', tag:'400000 mA powerbank as a gift',btn:''},


];


