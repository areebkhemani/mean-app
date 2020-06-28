import { Component, OnInit } from '@angular/core';
import {PostService} from './../services/post.service';

import { Router, ActivatedRoute } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post:any = []
  
  
 
  
  constructor(private service:PostService,private route:ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit(): void {
    
   
  }

  Createpost(p){
    let posts = {
    title:p.value.post.title,
    content:p.value.post.content,
    
    
  
    
    }
  
    this.service.create(posts).subscribe(data=> {
      this.toastr.success(`post ${data.title} successfully created!`);
  }
   
   
  )
  }

 
}




 


