import { Injectable } from "@angular/core";
import { ApiRouteService } from './api-route.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { Category } from '../models/Category';
import { City } from '../models/City';
import { Inventory } from '../models/Inventory';

@Injectable({
  providedIn: "root"
})
export class DataFetchService {
  constructor(private http: HttpClient, private apiService: ApiRouteService) {}
getInventory():Observable<Inventory[]>{
  let apiUrl = "/api/user/get/products";
  return this.http.get<Inventory[]>(
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
  
}