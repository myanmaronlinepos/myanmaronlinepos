import { Injectable } from '@angular/core';
import { ItemCategory } from './share/models/itemCategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  categories: ItemCategory[]  = [
    { id:1, categoryname:'Cigaretees'},
    { id:2, categoryname: 'Beer'},
    { id:3, categoryname: 'Rum'},
    { id:4, categoryname: 'Wisky'},
    { id:5, categoryname: 'Snack'}
  ];

  category:ItemCategory;
  constructor() { }

  getCategory() {
    return this.categories;
  }

  setCategory(category:ItemCategory){
    this.category=category;
    console.log("service");
    console.log(this.category);
  }

  getSelectedCategory(){
    return this.category;
  }

  getId() {
    return this.categories.length;
  }
}