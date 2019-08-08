import { Injectable } from '@angular/core';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  categories: Category[]  = [
    { category_id: 1, category_name:'Snack', user_id: 1,created_at: '',updated_at: ''},
    { category_id: 2, category_name:'Sunflower-Seed', user_id: 2,created_at: '',updated_at: ''},
    { category_id: 3, category_name:'Book', user_id: 3,created_at: '',updated_at: ''},
    { category_id: 4, category_name:'Bag', user_id: 4,created_at: '',updated_at: ''},
    { category_id: 5, category_name:'Mobile', user_id: 5,created_at: '',updated_at: ''},
    
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