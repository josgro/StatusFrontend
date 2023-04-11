import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../http/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }


  canActivate(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      console.log('have token')
      return true;
    } else {
      console.log('no token')
      this.router.navigate(['login']);
      return false;
    }
  }

}
