import { Component, OnInit,Optional,Inject } from '@angular/core';
import { ItemTag } from 'src/app/share/models/ItemTag';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface ItemTag {
  id: number;
  tagname:string;
}
@Component({ 
  selector: 'app-edit-tag',
  templateUrl: './edit-tag.component.html',
  styleUrls: ['./edit-tag.component.scss']
})
export class EditTagComponent implements OnInit {

  action:string;
  local_data:any;

  constructor(
    public dialogRef: MatDialogRef<EditTagComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: ItemTag) {
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

