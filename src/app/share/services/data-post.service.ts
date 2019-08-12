import { Injectable } from "@angular/core";
import { ApiRouteService } from './api-route.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { NewProduct } from '../models/NewProduct';
import { Category } from '../models/Category';
import { ItemTag } from '../models/ItemTag';
import { Inventory } from '../models/Inventory';


@Injectable({
  providedIn: "root"
})
export class DataPostService {
  constructor(private http: HttpClient, private apiService: ApiRouteService) {}

  postProduct(product:NewProduct):Observable<any>{
    let apiUrl = "/api/user/post/product";
    return this.http.post<any>(
      this.apiService.createCompleteApiRoute(apiUrl),
      product
    );
  }

  postCategory(category:any):Observable<any>{
    let apiUrl = "/api/user/post/category";
    return this.http.post<any>(
      this.apiService.createCompleteApiRoute(apiUrl),
      category
    );
  }

  postTag(tag:any):Observable<any>{
    let apiUrl = "/api/user/post/tag";
    return this.http.post<any>(
      this.apiService.createCompleteApiRoute(apiUrl),
      tag
    );
  }


  updateInventory(inventory:any):Observable<any> {
    let apiUrl="api/user/post/update_inventory";
    return this.http.post<any>(
      this.apiService.createCompleteApiRoute(apiUrl),
      inventory
    );
  }

  updateCategory(category:any):Observable<any> {
    let apiUrl="api/user/post/update_category";
    return this.http.post<any>(
      this.apiService.createCompleteApiRoute(apiUrl),
      category
    );
  }

  updateTag(tag:any):Observable<any> {
    let apiUrl="api/user/post/update_tag";
    return this.http.post<any>(
      this.apiService.createCompleteApiRoute(apiUrl),
      tag
    );
  }

  deleteTag(tag:any):Observable<any> {
    let apiUrl="api/user/post/delete_tag";
    return this.http.post<any>(
      this.apiService.createCompleteApiRoute(apiUrl),
      tag
    );
  }
  
  deleteCategory(category:any):Observable<any> {
    let apiUrl="api/user/post/delete_category";
    return this.http.post<any>(
      this.apiService.createCompleteApiRoute(apiUrl),
      category
    );
  }
}