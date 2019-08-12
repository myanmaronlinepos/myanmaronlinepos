import { Component, OnInit,Inject,Optional } from '@angular/core';
import {MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { from } from 'rxjs';
import { DialogData } from '../password/password.component';
@Component({
  selector: 'app-confirmationdialog',
  templateUrl: './confirmationdialog.component.html',
  styleUrls: ['./confirmationdialog.component.scss']
})
export class ConfirmationdialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData){}

  ngOnInit() { }
  
  // onSave(){
  //   this.router.navigate(['/dashboard/dashboard']);
  // }

}
