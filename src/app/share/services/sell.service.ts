import { Injectable } from '@angular/core';
import { SellItem } from '../models/SellItem';
import { SellProduct } from '../models/SellProduct';

@Injectable({
  providedIn: 'root'
})
export class SellService {

    items: SellItem[] = [
    {number: 1, name: 'Ruby', category: 'Cigaretts', tag: 'for 18+', quantity: 1000, price: 1000, selected: false},
    {number: 2, name: 'Point', category: 'Sunflower Seeds', tag: '', quantity: 10, price: 500, selected: false},
    {number: 3, name: 'Point', category: 'Sunflower Seeds', tag: '', quantity: 8, price: 500, selected: false},
    {number: 4, name: 'Lucky Strike', category: 'Cigaretts', tag: 'for 18+', quantity: 20, price: 1000, selected: false},
    {number: 5, name: 'Myanmar Tin', category: 'Beer', tag: 'for 18+', quantity: 1000, price: 2000, selected: false}
  ];
  
 sellProduct=[];
  constructor() {
   }

   
   getSellProduct() {
     return this.sellProduct.slice();
   }

   getItems() {
     return this.items;
   }


}
