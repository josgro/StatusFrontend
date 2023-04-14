import { RegisterDetails } from './../model/RegisterDetails';
import { Observable } from 'rxjs/';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDetails } from '../model/UserDetails';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private domain: string | undefined;

  constructor(private http: HttpClient) {
    this.domain = environment.domain;
  }


  register(registerDetails: RegisterDetails): Observable<any> {
    return this.http.post<any>(`${this.domain}auth/register`, registerDetails);
  }


  login(userDetails: UserDetails): Observable<any> {
    return this.http.post<any>(`${this.domain}auth/authenticate`, userDetails);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  setToken(token: any) {
    return localStorage.setItem('token', token);
  }

  removeToken() {
    return localStorage.removeItem('token');
  }


}
