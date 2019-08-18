import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { ApiRouteService } from "./api-route.service";
import { Login } from '../models/Login';
import { Observable } from 'rxjs';
import { Status } from '../models/Status';
import { User } from '../models/User';
import { Email } from '../models/email';

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
  forget(emailData: Email){
    let apiUrl="/api/guest/forgot-password";
    console.log(emailData);
    return this.http.post(
      this.apiService.createCompleteApiRoute(apiUrl),
      emailData
    );
  }

  logout() {
    let apiUrl="/api/user/signout";
    return this.http.post(
      this.apiService.createCompleteApiRoute(apiUrl),'');
  }

  changePassword(password) {
    let apiUrl="/change_password";
    return this.http.post(
      this.apiService.createCompleteApiRoute(apiUrl),password);
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