import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userName;
  constructor(private route: ActivatedRoute,
    private router: Router,private service:AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    this.service.logout();
  }

  user(){
    return this.service.getCurrentUser().userType

  }

  isLoggedIn() {
    this.userName = this.service.userName;
    return this.service.isLoggedIn();
  }


}
