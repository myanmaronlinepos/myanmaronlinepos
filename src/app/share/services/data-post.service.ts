import { Injectable } from "@angular/core";
import { ApiRouteService } from './api-route.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { NewProduct } from '../models/NewProduct';
import { Category } from '../models/Category';
import { ItemTag } from '../models/ItemTag';
import { Inventory } from '../models/Inventory';
import { SellHistoryService } from './sell-history.service';


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
  updateProduct(productData:any):Observable<any>{
    let apiUrl="api/user/post/updateProduct";
    return this.http.post<any>(
      this.apiService.createCompleteApiRoute(apiUrl),
      productData
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

  updateUserData(user:any):Observable<any> {
    let apiUrl="api/user/post/update_user_data";
    return this.http.post<any>(
      this.apiService.createCompleteApiRoute(apiUrl),
      user
    );
  }

  storeSellData(sell:any):Observable<any> {
    let apiUrl="api/user/post/sell/store";
    return this.http.post<any>(
      this.apiService.createCompleteApiRoute(apiUrl),
      sell
    );
  }

  assignProduct(product:any):Observable<any> {
    let apiUrl="api/user/post/assignProduct";
    return this.http.post<any>(
      this.apiService.createCompleteApiRoute(apiUrl),
      product
    );
  }

  updateUserImage(image:any):Observable<Blob> {
    let apiUrl="/api/user/post/userImage";
    return this.http.post<any>(
      this.apiService.createCompleteApiRoute(apiUrl),
      image,
      {responseType: 'blob' as 'json'}
    )
  }

  updateProductImage(image:any):Observable<Blob> {
    let apiUrl="/api/user/post/product/image";
    return this.http.post<any>(
      this.apiService.createCompleteApiRoute(apiUrl),
      image,
      {responseType: 'blob' as 'json'}
    )
  }

}