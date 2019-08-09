import { Injectable } from "@angular/core";
import { ApiRouteService } from './api-route.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { NewProduct } from '../models/NewProduct';
import { Category } from '../models/Category';
import { ItemTag } from '../models/ItemTag';

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
}