import { Component, OnInit } from '@angular/core';
import { StartupService } from './../services/startup.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'makestartup',
  templateUrl: './makestartup.component.html',
  styleUrls: ['./makestartup.component.css']
})
export class MakestartupComponent implements OnInit {
  start:any = []
  id
  post:any[]
  constructor(private service:StartupService,private route:ActivatedRoute, private toastr: ToastrService) { }

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
    let startup = {
     review:c.value.start.review
     
      
    
      
      }
    
      this.service.createid(startup, this.id).subscribe(data=> 
        {
          this.toastr.success(`successfully started! .`)
        },
    
     
     
    )
  }

}
