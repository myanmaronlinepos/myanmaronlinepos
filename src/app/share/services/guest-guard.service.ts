import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from './authentication.service';

@Injectable({
  providedIn: "root"
})

export class GuestGuardService implements CanActivate {
  constructor(private router: Router,private authService:AuthService) {}

  canActivate() {
    this.authService.check()
    .subscribe(
      response => {
        console.log(response.status);
        if(response.status) {

            this.router.navigate["/dashboard/dashboard"];
        }else {
            return true;
        }
      },
      error => {
        console.log(error);
        console.log("error");
      }
    )
   return true;
  }
}
