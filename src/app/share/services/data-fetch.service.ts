import { Injectable } from "@angular/core";
import { ApiRouteService } from "./api-route.service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: "root"
})
export class CommonService {
  constructor(private http: HttpClient, private apiRouteSvc: ApiRouteService) {}

  insertProduct(product) {
    let apiUrl = "api/deparment/new";
    return this.http.post(
      this.apiRouteSvc.createCompleteApiRoute(apiUrl),
      product
    );
  }
}