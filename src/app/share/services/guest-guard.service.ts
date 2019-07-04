import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthService } from './authentication.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})

export class GuestGuardService implements CanActivate {
    constructor(
        
        private authService:AuthService,
        private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.check()
    .then((authenticated:boolean) => {
        console.log(authenticated);

        if(!authenticated) {
          console.log("navigationg");
          this.router.navigate(['/home/login']);
          return false;
        }
        
        return true;
        
    });
  }
}
