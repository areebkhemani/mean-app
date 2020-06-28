import { Component, OnInit } from '@angular/core';
import {PostService} from './../services/post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'listpost',
  templateUrl: './listpost.component.html',
  styleUrls: ['./listpost.component.css']
})
export class ListpostComponent implements OnInit {
  data = [];
 
 
  constructor(private service:PostService,private router:Router,route:ActivatedRoute) {
    this.service.getAll().subscribe(data=> {
      this.data = data;
    })
   }

  ngOnInit(): void {
  }
  adddonation(donation) {
    this.router.navigate(['/donate',donation._id]);

}


}
