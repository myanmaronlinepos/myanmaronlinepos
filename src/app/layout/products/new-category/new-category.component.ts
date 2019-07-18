import { Component, OnInit, Inject, Optional } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ItemCategory } from 'src/app/share/models/itemCategory';

export interface ItemCategory {
  id: number;
  categoryname:string;
}

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss']
})
export class NewCategoryComponent implements OnInit {

  action: string;
  local_data: any;
  constructor(
    public dialogRef: MatDialogRef<NewCategoryComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: ItemCategory) { 
      console.log(data);
      this.local_data= {...data};
      this.action= this.local_data.action;
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
