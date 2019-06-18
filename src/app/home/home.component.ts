import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public imageUrl;
  constructor() { }

  ngOnInit() {
    this.imageUrl = [
      'assets/shop3.jpg',
      'assets/shop4.jpg',
      'assets/shop5.jpg'
      ];
  }

}
