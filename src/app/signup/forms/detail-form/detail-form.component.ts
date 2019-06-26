import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.scss']
})
export class DetailFormComponent implements OnInit {
  showStore: boolean=false;

  constructor() { }

  ngOnInit() {
  }
  onSelect(event: any){
    this.showStore=true;
  }
  onCheck(event: any){
    this.showStore=false;
  }

}
