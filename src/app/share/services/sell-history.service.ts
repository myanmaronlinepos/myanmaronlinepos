import { Injectable } from '@angular/core';
import { History } from '../models/History';


@Injectable({
  providedIn: 'root'
})
export class SellHistoryService {

  sellHistory: History[] = [
    {number: 1, name: 'Ruby', quantity: 10, cost:2000, sale:3000},
    {number: 2, name: 'Point', quantity: 10, cost:1000, sale:1500},
    {number: 3, name: 'Point', quantity: 8, cost:2000, sale:3000},
    {number: 4, name: 'Lucky Strike', quantity: 20, cost:2000, sale:3000},
    {number: 5, name: 'Myanmar Tin', quantity: 12, cost:2000, sale:3000}
  ];

  constructor() {
   }

   getSellHistory() {
     return this.sellHistory;
   }
}
