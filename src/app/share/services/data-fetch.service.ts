import { Injectable } from "@angular/core";
import { ApiRouteService } from './api-route.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { Category } from '../models/Category';
import { City } from '../models/City';
import { ItemTag } from 'src/app/layout/products/new-tags/new-tags.component';
import { User } from '../models/User';
import { Inventory } from '../models/Inventory';
import { SellProduct } from '../models/SellProduct';

@Injectable({
  providedIn: "root"
})
export class DataFetchService {
  constructor(private http: HttpClient, private apiService: ApiRouteService) {}

  getUserData():Observable<User>{
    let apiUrl = "/api/user/get/userData";
    return this.http.get<User>(
      this.apiService.createCompleteApiRoute(apiUrl)
    );
  }

  getAllProduct():Observable<Product[]>{
    let apiUrl = "/api/user/get/products";
    return this.http.get<Product[]>(
      this.apiService.createCompleteApiRoute(apiUrl)
    );
  }

  getProduct(productId:string):Observable<Product> {
    let apiUrl="api/user/get/product";
    return this.http.get<Product>(
      this.apiService.createCompleteApiRoute(apiUrl),
      {
        params: {
          product_id: productId
        }
      }
    );
  }

 getAllCategory():Observable<Category[]> {
   let apiUrl="api/user/get/categories";
   return this.http.get<Category[]>(
     this.apiService.createCompleteApiRoute(apiUrl)
   );
 }

 getAllTag():Observable<ItemTag[]> {
  let apiUrl="api/user/get/tags";
  return this.http.get<ItemTag[]>(
    this.apiService.createCompleteApiRoute(apiUrl)
  );
}

getAllInventory():Observable<Inventory[]> {
  let apiUrl="api/user/get/inventory";
  return this.http.get<Inventory[]>(
    this.apiService.createCompleteApiRoute(apiUrl)
  );
}


getAllCity():Observable<City[]> {
  let apiUrl="api/guest/allcity";
  return this.http.get<City[]>(
    this.apiService.createCompleteApiRoute(apiUrl)
  );
}


getCity():Observable<City> {
  let apiUrl="api/user/get/city";
  return this.http.get<City>(
    this.apiService.createCompleteApiRoute(apiUrl)
  )
}
getAllSell():Observable<SellProduct[]> {
  let apiUrl="api/user/get/sellProduct";
  return this.http.get<SellProduct[]>(
    this.apiService.createCompleteApiRoute(apiUrl)
  );
}
  
}