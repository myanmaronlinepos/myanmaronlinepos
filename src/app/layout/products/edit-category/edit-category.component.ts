import { Component, OnInit, Inject, Optional } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { ItemCategory } from 'src/app/share/models/ItemCategory';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface ItemCategory {
  id: number;
  categoryname:string;
}

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {

  action:string;
  local_data:any;

  constructor(
    public dialogRef: MatDialogRef<EditCategoryComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: ItemCategory) {
    console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
  }

  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
  }
 
  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }
  ngOnInit() {
    
  }
}
