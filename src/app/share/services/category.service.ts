import { Injectable } from '@angular/core';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  categories: Category[]  = [
    { category_id: 1, category_name:'Snack'},
    { category_id: 2, category_name:'Sunflower-Seed'},
    { category_id: 3, category_name:'Book'},
    { category_id: 4, category_name:'Bag'},
    { category_id: 5, category_name:'Mobile'},
    
  ];

  category: Category;
  constructor() { }

  getCategory() {
    return this.categories;
  }

  setCategory(category: Category){
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