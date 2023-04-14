import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../http/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  private domain: string | undefined;

  constructor(private auth: AuthService, private router: Router) {
    this.domain = environment.domain;
  }


  public register(registerForm: NgForm) {
    this.auth.removeToken();
    return this.auth.register(registerForm.value).subscribe(
      (response) => {
        this.auth.setToken(response.token);
        this.router.navigate(['status']);
      });
  }


}
