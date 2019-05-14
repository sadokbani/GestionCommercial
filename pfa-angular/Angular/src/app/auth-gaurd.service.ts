import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthenticationService} from "./starter/login/authentication.service";
import {User} from "./users/users.component";

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(private router: Router,
              private authService: AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let user:User = JSON.parse(sessionStorage.getItem('User'));
    if (this.authService.isUserLoggedIn() && user.grade ==1)
      return true;

    this.router.navigate(['']);
    return false;

  }

}
