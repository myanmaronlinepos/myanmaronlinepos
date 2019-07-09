import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { ApiRouteService } from "./api-route.service";
import { Login } from '../models/Login';
import { Observable } from 'rxjs';
import { Status } from '../models/Status';
import { User } from '../models/User';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient, private apiService: ApiRouteService) {}

  login(loginData: Login) {
    let apiUrl = "/api/guest/signin";
    console.log(loginData);
    return this.http.post(
      this.apiService.createCompleteApiRoute(apiUrl),
      loginData
    );
  }

  logout() {
    let apiUrl="/api/user/signout";
    return this.http.post(
      this.apiService.createCompleteApiRoute(apiUrl),'');
  }

  check() {
    let apiUrl="/api/check";
    return this.http.get(
      this.apiService.createCompleteApiRoute(apiUrl)).toPromise();
  }

  signup(signupData: User){
    let apiUrl="/api/guest/signup";
    console.log(signupData);
    return this.http.post(
      this.apiService.createCompleteApiRoute(apiUrl),
      signupData
    ).toPromise();
    
  }
}