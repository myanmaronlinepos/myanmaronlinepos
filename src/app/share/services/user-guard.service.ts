import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from './authentication.service';

@Injectable({
  providedIn: "root"
})

export class UserGuardService implements CanActivate {
  constructor(private router: Router,private authService:AuthService) {}

  canActivate() {
    this.authService.check().subscribe(
      response => {
        console.log(response);
        if(response)
            return true;
      },
      error => {
        console.log(error);
      }
    )
   this.router.navigate["/home/login"];
   return false;
  }
}
