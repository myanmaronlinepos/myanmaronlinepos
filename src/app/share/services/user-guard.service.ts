import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from './authentication.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})

export class UserGuardService implements CanActivate {
  constructor(private router: Router,private authService:AuthService) {}

  canActivate():Observable<boolean> | Promise<boolean> | boolean {

    return this.authService.check()
    .then((authenticated:boolean) => {
        console.log(authenticated);

        if(authenticated) {
            this.router.navigate(['/dashboard/dashboard']);
            return false;
        }
        return true;
        
    });
  }
}
