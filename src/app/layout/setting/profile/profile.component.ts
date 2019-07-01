import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  changepwd=false;

  constructor() { }

  ngOnInit() {
  }

  changePassword():void {
    this.changepwd=!this.changepwd;
  }

}
