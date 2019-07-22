import { Injectable } from "@angular/core";
import { ApiRouteService } from './api-route.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: "root"
})
export class DataPostService {
  constructor(private http: HttpClient, private apiService: ApiRouteService) {}

  postData(product:Product){
    let apiUrl = "/api/user/post/product";
    return this.http.post(
      this.apiService.createCompleteApiRoute(apiUrl),
      product
    ).toPromise();
  }
}