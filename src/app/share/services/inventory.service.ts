import { Injectable } from '@angular/core';
import { Inventory } from '../models/Inventory';
@Injectable({
  providedIn: 'root'
})
export class InventoryService {
 items: Inventory[] = [
    { product_id: 1, name: 'point',category : 'sunflowerseeds', quantity:1000},
    { product_id: 2, name: 'point',category : 'sunflowerseeds', quantity:1000},
    { product_id: 3, name: 'point',category : 'sunflowerseeds', quantity:1000},
    { product_id: 4, name: 'point',category : 'sunflowerseeds', quantity:1000},
    { product_id: 5, name: 'point',category : 'sunflowerseeds', quantity:1000},
    { product_id: 6, name: 'point',category : 'sunflowerseeds', quantity:1000},
    { product_id: 7, name: 'point',category : 'sunflowerseeds', quantity:1000},
    { product_id: 8, name: 'point',category : 'sunflowerseeds', quantity:1000},
    { product_id: 9, name: 'point',category : 'sunflowerseeds', quantity:1000},
    { product_id: 10, name: 'point',category : 'sunflowerseeds', quantity:1000},
 ];
constructor() { }
getItems() {
  return this.items;
}

}
