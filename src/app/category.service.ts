import { Injectable } from '@angular/core';
import { ItemCategory } from './share/models/ItemCategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  categories: ItemCategory[]  = [
    { category_id:1, categoryname:'Cigaretees'},
    { category_id:2, categoryname: 'Beer'},
    { category_id:3, categoryname: 'Rum'},
    { category_id:4, categoryname: 'Wisky'},
    { category_id:5, categoryname: 'Snack'}
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