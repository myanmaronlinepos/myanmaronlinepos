import { Injectable } from '@angular/core';
import { ItemCategory } from '../../layout/products/edit-category/edit-category.component';

@Injectable({
  providedIn: 'root'
})
export class CheckCategoryService {

  categories: ItemCategory[] = [
    {id: 1, categoryname: 'Cigaretts'},
    {id: 1, categoryname: 'Sunflower Seeds'},
    {id: 1, categoryname: 'Beer'},
  ];
  constructor() { }
  
  getCategory() {
    return this.categories;
   }
}
