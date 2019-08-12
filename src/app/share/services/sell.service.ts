import { Injectable } from '@angular/core';
import { SellItem } from '../models/SellItem';
import { SellProduct } from '../models/SellProduct';
import { DataFetchService } from './data-fetch.service';

@Injectable({
  providedIn: 'root'
})
export class SellService {
    data: any;
    items: SellProduct[]= this.data; 
  
 sellProduct=[];
  constructor(
    private dataFetchService : DataFetchService
  ) { }

  fetchData() {
    this.dataFetchService.getAllSell().subscribe(
      response => {
        console.log(response);
        this.data = response;
      },
      error => {

      }
    )
  }

   getSellProduct() {
     return this.sellProduct.slice();
   }

   getItems() {
     return this.items;
   }


}
