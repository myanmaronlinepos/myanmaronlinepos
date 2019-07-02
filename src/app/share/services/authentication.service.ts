import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { ApiRouteService } from "./api-route.service";
import { Login } from '../models/Login';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient, private apiRouteSvc: ApiRouteService) {}

  login(loginData: Login) {
    let apiUrl = "/login";
    console.log(loginData);
    return this.http.post(
      this.apiRouteSvc.createCompleteApiRoute(apiUrl),
      loginData
    );
  }
}
