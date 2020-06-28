import { Component, OnInit } from '@angular/core';
import { PostService } from './../services/post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {
  donate:any = []
  id
  post:any[]
  constructor(private service:PostService,private route:ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if(params.has("id")) {
          
          this.id = params.get('id');    
          this.service.getById(this.id).subscribe(
            data=> {
              this.post = data
            },
           
          )  
      }
    })
  }

  adddonation(c){
    let donation = {
     visa:c.value.donate.visa,
     amount:c.value.donate.amount,
     review:c.value.donate.review
      
    
      
      }
    
      this.service.addwithcap(donation, this.id,"donation").subscribe(data=> 
        {
          this.toastr.success(`successfully donated! .`)
        },
    
     
     
    )
  }


}
