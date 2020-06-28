import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { BadInput } from './../common/bad-input';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
 import { UserService } from './../services/user.service';
 import { AppError } from './../common/app-error';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user:any = [];
  id
  userType = [
    {id: 1, type:"entrepreneurist" },
    {id: 2, type:"doner" },
   
  ]
  constructor( private toastr: ToastrService,
    private route: ActivatedRoute,
    private service: UserService) { }

  ngOnInit(): void {
  }
  signup(sf){
    let user={
      name: sf.value.registration.name,
      email:sf.value.registration.email,
      password:sf.value.registration.password,
      userType:sf.value.registration.userType
      

    }
    this.service.create(user).subscribe(data=> {
     this.toastr.success(`User ${data.name} successfully created!`);
 },
 (error: AppError) => {
  if (error instanceof BadInput)
    this.toastr.error('Incorrect Inputs');
  else
    throw error
}
 
 )

sf.reset();

}

}
