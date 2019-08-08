import { Injectable } from '@angular/core';
import { Inventory } from '../models/Inventory';
@Injectable({
  providedIn: 'root'
})
export class InventoryService {
 items: Inventory[] = [];
constructor() { }
getItems() {
  return this.items;
}

}
