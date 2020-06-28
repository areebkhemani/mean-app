import { Component, OnInit } from '@angular/core';
import {PostService} from './../services/post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'myposts',
  templateUrl: './myposts.component.html',
  styleUrls: ['./myposts.component.css']
})
export class MypostsComponent implements OnInit {
  data = [];
  
 
  constructor(private service:PostService,private router:Router,route:ActivatedRoute,private toastr: ToastrService) { 
    this.service.getwithcap("Myposts").subscribe(data=> {
      this.data = data;
    })
  }

  ngOnInit(): void {
  }

  viewdonation(donation) {
    this.router.navigate(['/viewdonation',donation._id]);
  
  }

  startup(start) {
    this.router.navigate(['/makestartup',start._id]);
  
  }


  
      
  

}
