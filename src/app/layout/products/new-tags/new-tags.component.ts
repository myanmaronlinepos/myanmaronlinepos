import { Component, OnInit,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-new-tags',
  templateUrl: './new-tags.component.html',
  styleUrls: ['./new-tags.component.scss']
})
export class NewTagsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NewTagsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    window.alert("Successfully...");
  }

  ngOnInit() {
  }


}
