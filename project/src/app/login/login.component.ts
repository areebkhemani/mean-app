import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  invalidLogin: boolean;
  constructor(private authService:AuthService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }
  signIn(credentials){
    this.authService.login(credentials).subscribe(result=>{
      let user = this.authService.getCurrentUser()
      if (user && user.userType.toLowerCase() === 'admin')
      {
      this.router.navigate(['/Home'])
      }
      else if  (user && user.userType.toLowerCase() === 'client') {
        this.router.navigate(['/Home'])
      }

      else if  (user && user.userType.toLowerCase() === 'developer') {
        this.router.navigate(['/Home'])
      }

    })

  }

}
