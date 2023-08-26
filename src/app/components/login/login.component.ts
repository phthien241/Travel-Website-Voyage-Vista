import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router,private http: HttpClient, private authService: AuthService){}
  userLogin(form:NgForm){
    const user = {email: form.value.email, password: form.value.password};
    this.authService.userLogin(user);
  }
}
