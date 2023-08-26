import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  email = localStorage.getItem("userEmail");
  constructor(private authService: AuthService){}
  logOut(){
    this.authService.userLogout();
  }
  ngOnInit(): void {
    console.log(this.email);
      this.authService.isAuthenticated().subscribe(response=>{
        this.isLoggedIn = response;
      })
      this.authService.getUserEmail().subscribe(email=>{
        this.email = email;
      })
  }
}
