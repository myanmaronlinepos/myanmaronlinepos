import { Injectable } from '@angular/core';
import { ItemCategory } from './share/models/itemCategory';
import { Product } from './share/models/Product';
import { EditProduct } from './share/models/editProduct';

@Injectable({
  providedIn: 'root'
})
export class EditProductService {
  products:EditProduct[] = [
    { id:1, productName:'point',category:'sunflower',tag:'for all', quantity:200,cost:2000,sale:2100,note:'delicious'},
    { id:2, productName:'zyan',category:'sunflower',tag:'for all', quantity:200,cost:2000,sale:2100,note:'delicious'},
    { id:3, productName:'htet',category:'sunflower',tag:'for all', quantity:200,cost:2000,sale:2100,note:'delicious'},

  ];
  product: EditProduct;

  constructor() { }

  getProduct(){
    return this.products;
  }
  setProduct(product:EditProduct){
    this.product=this.product;
    console.log("service");
    console.log(this.product);
  }
  getSelectedProduct(){
    return this.product;
  }
  
  
}
