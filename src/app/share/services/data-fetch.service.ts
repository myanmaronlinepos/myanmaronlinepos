import { Injectable } from "@angular/core";
import { ApiRouteService } from './api-route.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: "root"
})
export class DataFetchService {
  constructor(private http: HttpClient, private apiService: ApiRouteService) {}

  getAllProduct():Observable<Product[]>{
    let apiUrl = "/api/user/get/products";
    return this.http.get<Product[]>(
      this.apiService.createCompleteApiRoute(apiUrl)
    );
  }
}