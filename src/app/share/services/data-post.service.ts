import { Injectable } from "@angular/core";
import { ApiRouteService } from './api-route.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class DataPostService {
  constructor(private http: HttpClient, private apiService: ApiRouteService) {}

//   postData():Observable<Product[]>{
//     let apiUrl = "/api/user/get/products";
//     return this.http.get<Product[]>(
//       this.apiService.createCompleteApiRoute(apiUrl)
//     );
//   }
}