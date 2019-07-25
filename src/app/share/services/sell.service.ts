import { Injectable } from '@angular/core';
import { SellItem } from '../models/SellItem';

@Injectable({
  providedIn: 'root'
})
export class SellService {

    items: SellItem[] = [
    {number: 1, name: 'Ruby', category: 'Cigaretts', tag: 'for 18+', quantity: 1000, price: 1000},
    {number: 2, name: 'Point', category: 'Sunflower Seeds', tag: '', quantity: 10, price: 500},
    {number: 3, name: 'Point', category: 'Sunflower Seeds', tag: '', quantity: 8, price: 500},
    {number: 4, name: 'Lucky Strike', category: 'Cigaretts', tag: 'for 18+', quantity: 20, price: 1000},
    {number: 5, name: 'Myanmar Tin', category: 'Beer', tag: 'for 18+', quantity: 1000, price: 2000}
  ];
  
 sellItem:SellItem[]=[];
  constructor() {
   }
   
   addItem(item:SellItem) {
     this.sellItem.push(item);
   }

   removeItem(item:SellItem) {
    const index=this.sellItem.indexOf(item);
    this.sellItem.splice(index,1);
   }

   getSellItem() {
     return this.sellItem;
   }

   getItems() {
     return this.items;
   }
}