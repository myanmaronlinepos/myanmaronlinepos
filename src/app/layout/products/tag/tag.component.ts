import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import {MatTableDataSource, MatTable} from '@angular/material/table';
import { NewTagsComponent} from '../new-tags/new-tags.component';
import { DeletetagComponent } from '../all-products/deletetag/deletetag.component';
import { ThemeService } from 'ng2-charts';
import { ItemTag } from 'src/app/share/models/ItemTag';
import { DeleteTagService } from 'src/app/delete-tag.service';


@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  displayedColumns: string[] = ['id','productname','tag','btn'];
  tags:ItemTag[]=[];
  dataSource: MatTableDataSource<ItemTag>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(public dialog: MatDialog,
    public deleteservice:DeleteTagService) {}

  
  ngOnInit() {
    this.tags=this.deleteservice.getTag();
    this.dataSource=new MatTableDataSource<ItemTag>(this.tags);
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




