import { Component, OnInit } from '@angular/core';
import {DonationService} from './../services/donation.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'mydonations',
  templateUrl: './mydonations.component.html',
  styleUrls: ['./mydonations.component.css']
})
export class MydonationsComponent implements OnInit {
  data = [];
  constructor(private service:DonationService,private router:Router,route:ActivatedRoute) {
    this.service.getAll().subscribe(data=> {
      this.data = data;
    })
   }
   

  ngOnInit(): void {
  }

}
