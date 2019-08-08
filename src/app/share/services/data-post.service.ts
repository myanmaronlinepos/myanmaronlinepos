import { Injectable } from "@angular/core";
import { ApiRouteService } from './api-route.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { NewProduct } from '../models/NewProduct';

@Injectable({
  providedIn: "root"
})
export class DataPostService {
  constructor(private http: HttpClient, private apiService: ApiRouteService) {}

  postProduct(product:NewProduct):Observable<boolean>{
    let apiUrl = "/api/user/post/product";
    return this.http.post<boolean>(
      this.apiService.createCompleteApiRoute(apiUrl),
      product
    );
  }

  postCategory(product:NewProduct):Observable<boolean>{
    let apiUrl = "/api/user/post/product";
    return this.http.post<boolean>(
      this.apiService.createCompleteApiRoute(apiUrl),
      product
    );
  }
}