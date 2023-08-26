import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }
  getUserEmail(): Observable<string>{
    return this.userEmail.asObservable();
  }
  constructor(private http: HttpClient, private router: Router, private jwtHelper: JwtHelperService) { }
  
  ngOnInit(): void {
  }
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(!this.jwtHelper.isTokenExpired(localStorage.getItem("authToken")));
  private userEmail = new Subject<string>();
  userLogin(userData: { email: string, password: string }) {
    return this.http.post<
      {
        message: unknown; email: string, password: string, userId: String, token: any
      }>("http://localhost:3000/api/login", userData).subscribe({
        next: response => {
          localStorage.setItem("userEmail",userData.email);
          localStorage.setItem("authToken", response.token);
          console.log(localStorage.getItem("userEmail"));
          const token = localStorage.getItem("authToken");
          this.userEmail.next(userData.email);
          this.isAuthenticatedSubject.next(!this.jwtHelper.isTokenExpired(token));
          this.router.navigate([response.userId + "/add"]);
        },
        error: error => {
          console.log(error.error.message);
        }
      })
  };

  userLogout(){
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");
    this.router.navigate(['login']);
    window.location.reload();
  }
}

