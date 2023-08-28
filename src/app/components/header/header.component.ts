import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  email = localStorage.getItem("userEmail");
  constructor(private authService: AuthService, private router: Router) {
  }
  logOut() {
    this.authService.userLogout();
  }
  addData() {
    this.authService.checkLoginStatus();
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(["add/user" + localStorage.getItem("userID")]);
    });
  }
  getInformation() {
    this.authService.checkLoginStatus()
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(["information/user" + localStorage.getItem("userID")]);
    });
  }
  ngOnInit(): void {
    this.authService.isAuthenticated().subscribe(response => {
      this.isLoggedIn = response;
    })
    this.authService.getUserEmail().subscribe(data => {
      this.email = data.email;
    })
  }
}
