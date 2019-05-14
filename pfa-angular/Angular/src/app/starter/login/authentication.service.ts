import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private router: Router) { }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('User');
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('User');
    this.router.navigate(['']);
  }
}
