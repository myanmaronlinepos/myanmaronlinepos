import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NewTagsComponent} from '../new-tags/new-tags.component';
import { DeletetagComponent } from '../all-products/deletetag/deletetag.component';
import { ItemTag } from 'src/app/share/models/ItemTag';
import { DeleteTagService } from 'src/app/delete-tag.service';
import {MatTableDataSource, MatTable} from '@angular/material/table';
import {EditTagComponent } from '../all-products/edit-tag/edit-tag.component';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  displayedColumns: string[] = ['id','tagname','action'];
  tags:ItemTag[] = [];
  dataSource: MatTableDataSource<ItemTag>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) table: MatTable<any>;
  constructor(public dialog: MatDialog,
    public deleteservice:DeleteTagService,
   ) {}

  ngOnInit() {
    this.tags=this.deleteservice.getTag();
    this.dataSource=new MatTableDataSource<ItemTag>(this.tags);
    this.dataSource.paginator = this.paginator;
  }
  createTag(action,obj) {
    obj.action=action;
    const dialogRef=this.dialog.open(NewTagsComponent,{
      width: '500px',
      height: '270px',
      data:obj
    });
   
    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add')
        this.addRowData(result.data);
    });
  }
  addRowData(row_obj) {
    var d = new Date();
    this.tags.push({
      id: this.deleteservice.getId()+1,
      tag_name: row_obj.tagname,
      
    });
    this.dataSource=new MatTableDataSource<ItemTag>(this.tags);
     this.table.renderRows();
  }

  onEdit(action, obj){
    obj.action=action;
    const dialogRef=this.dialog.open(EditTagComponent,{
       width: '300px',
       height: '180px',
       data: obj
    });
    dialogRef.afterClosed().subscribe(result=> {
      if(result.event=='Edit') {
        this.editRowData(result.data);
      }
    });
  }
  editRowData(row_obj) {
    this.tags = this.tags.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.tagname = row_obj.tagname;
      }
      return true;
    });
  }

  onDelete(action,obj){
    obj.action=action;
    const dialogRef=this.dialog.open(DeletetagComponent,{
      width:'280px',
      height:'150px',
      data:obj
    });
    dialogRef.afterClosed().subscribe(result =>{
      if(result.event=='Delete'){
        this.deleteRowData(result.data);
      }
    });
  }
  deleteRowData(row_obj){
    this.tags=this.tags.filter((value,key)=>{
      return value.id != row_obj.id;
    });
    this.dataSource=new MatTableDataSource<ItemTag>(this.tags);
  }
  
}




