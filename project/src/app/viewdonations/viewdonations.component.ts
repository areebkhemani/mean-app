import { Component, OnInit } from '@angular/core';
import { DonationService } from './../services/donation.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'viewdonations',
  templateUrl: './viewdonations.component.html',
  styleUrls: ['./viewdonations.component.css']
})
export class ViewdonationsComponent implements OnInit {
  data=[]
  
  id
  constructor(private service:DonationService,private route:ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if(params.has("id")) {
         
          this.id = params.get('id');    
          this.service.getById(this.id).subscribe(
            data=> {
              this.data = data
            })
  }
})

}
  }


