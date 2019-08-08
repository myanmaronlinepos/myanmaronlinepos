import { Injectable } from '@angular/core';
import { City } from '../models/City';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  items: City[] = [
    {city_id:1, city_name:'Yangon'},
    {city_id:2, city_name:'Madalay'},
    {city_id:3, city_name:'NayPyiTaw'},
    {city_id:4, city_name:'Bago'},
    {city_id:5, city_name:'Magway'},
    {city_id:6, city_name:'Pyin Oo Lwin'},
    {city_id:7, city_name:'Monywa'},
    {city_id:8, city_name:'Shwebo'},
    {city_id:9, city_name:'Sagaing'},
    {city_id:10, city_name:'Mogyok'},
    {city_id:11, city_name:'Myitkyina'},
    {city_id:12, city_name:'Katha'},
    {city_id:13, city_name:'Myaung'},
    {city_id:14, city_name:'Ye Oo'}
  ];
  constructor() { }
  getItems() {
    return this.items;
  }
}
