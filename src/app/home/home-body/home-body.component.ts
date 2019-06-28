import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.scss']
})
export class HomeBodyComponent implements OnInit {

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
