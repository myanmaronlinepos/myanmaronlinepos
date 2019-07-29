import { Component, OnInit,Inject,Optional} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ItemTag} from 'src/app/share/models/ItemTag'
import { from } from 'rxjs';

export interface ItemTag{
  id:number;
  productname:string;
  tag:string;
}

@Component({
  selector: 'app-new-tags',
  templateUrl: './new-tags.component.html',
  styleUrls: ['./new-tags.component.scss']
})

export class NewTagsComponent implements OnInit {
  action: string;
  local_data: any;

  constructor(
    public dialogRef: MatDialogRef<NewTagsComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: ItemTag) { 
      console.log(data);
      this.local_data= {...data};
      this.action= this.local_data.action;
    }
    doAdd(){
      this.dialogRef.close({event:this.action,data:this.local_data});
    }
    onNoClick() {
      this.dialogRef.close({event: 'Cancel'});
    }
  ngOnInit() {
  }
}
