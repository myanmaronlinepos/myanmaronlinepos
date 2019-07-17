import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

export interface ItemCategory {
  id: number;
  categoryname:string;
}

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.scss']
})
export class DeleteCategoryComponent implements OnInit {

  action:string;
  local_data:any;

  constructor(
    public dialogRef: MatDialogRef<DeleteCategoryComponent>,
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
