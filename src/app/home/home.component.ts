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
      'assets/img/shop2.jpg',
      'assets/img/shop3.jpg',
      'assets/img/shop4.jpg',
      'assets/img/shop5.jpg'
      ];
  }

}
