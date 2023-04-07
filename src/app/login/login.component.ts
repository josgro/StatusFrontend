import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from '../http/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private domain: string | undefined;

  constructor(private auth: AuthService, private router: Router) {
    this.domain = environment.domain;
  }


  login(loginForm: NgForm) {
    this.auth.removeToken();
    return this.auth.login(loginForm.value).subscribe(
      (response) => {
        this.auth.setToken(response.token);
        this.router.navigate(['status']);
      });
  }

}