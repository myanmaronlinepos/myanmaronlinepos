import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SellService {

  stock = new EventEmitter<string>();
  constructor() {
   }

}
