import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  token: string;
  isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }
  getUserEmail(): Observable<{email: string, userId: string, isAddData: boolean}>{
    return this.userEmail.asObservable();
  }
  constructor(private http: HttpClient, private router: Router, private jwtHelper: JwtHelperService) { }
  
  ngOnInit(): void {
  }
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(!this.jwtHelper.isTokenExpired(localStorage.getItem("authToken")));
  private userEmail = new Subject<{email: string, userId: string, isAddData: boolean}>();
  userLogin(userData: { email: string, password: string }) {
    return this.http.post<
      {
        message: unknown; email: string, password: string, userId: string, token: any
      }>("http://localhost:3000/api/login", userData).subscribe({
        next: response => {
          localStorage.setItem("userEmail",userData.email);
          localStorage.setItem("authToken", response.token);
          localStorage.setItem("currentPage", "addData");
          localStorage.setItem("userID", response.userId);
          this.token = localStorage.getItem("authToken");
          this.userEmail.next({email: userData.email, userId: response.userId, isAddData: true});
          this.isAuthenticatedSubject.next(!this.jwtHelper.isTokenExpired(this.token));
          this.router.navigate(["/add/user"+localStorage.userID]);
        },
        error: error => {
          console.log(error.error.message);
        }
      })
  };

  userLogout(){
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userID");
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['login']);
  }

  checkLoginStatus(){
    this.isAuthenticatedSubject.next(!this.jwtHelper.isTokenExpired(this.token));
  }
}

