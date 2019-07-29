import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ItemTag } from 'src/app/share/models/ItemTag';
export interface ItemTag{
  id:number;
  productname:string;
  tag:string;
}
@Component({
  selector: 'app-deletetag',
  templateUrl: './deletetag.component.html',
  styleUrls: ['./deletetag.component.scss']
})
export class DeletetagComponent implements OnInit {
  action:string;
  local_data:any;
  constructor( 
    public dialogRef: MatDialogRef<DeletetagComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data:ItemTag) {
    console.log(data);
    this.local_data={...data};
    this.action=this.local_data.action;
   }
   doAction(){
     this.dialogRef.close({event:this.action,data:this.local_data})
   }
   closeDialog(){
     this.dialogRef.close({event:'Cancel'});
   }

  ngOnInit() {
  }

}
