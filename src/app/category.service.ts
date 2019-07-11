import { Injectable } from '@angular/core';
import { ItemCategory } from './share/models/itemCategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  categories: ItemCategory[]  = [
    { categoryname:'Cigaretees'},
    { categoryname: 'Beer'},
    { categoryname: 'Rum'},
    { categoryname: 'Wisky'},
    { categoryname: 'Snack'}
  ];

  category:ItemCategory[]=[];
  constructor() { }

  getCategory() {
    return this.categories;
  }
}