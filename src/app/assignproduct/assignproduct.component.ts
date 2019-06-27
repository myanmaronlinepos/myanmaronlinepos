import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-assignproduct',
  templateUrl: './assignproduct.component.html',
  styleUrls: ['./assignproduct.component.scss']
})
export class AssignproductComponent implements OnInit {

  displayedColumns: string[] = ['assignproduct'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}

export interface PeriodicElement {
  assignproduct: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{ assignproduct: 'Ruby' },
{ assignproduct: 'Lucky Strike' },
{ assignproduct: 'Kent' },
{ assignproduct: 'ESSE' },
{ assignproduct: 'Myanmar' },
{ assignproduct: 'Grand Royal' },
{ assignproduct: 'Ruby' },
{ assignproduct: 'Lucky Strike' },
{ assignproduct: 'Kent' },
{ assignproduct: 'ESSE' }
];
