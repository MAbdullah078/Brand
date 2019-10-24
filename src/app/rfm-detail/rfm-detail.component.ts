import { Component, OnInit } from '@angular/core';
import {UserService} from '../_services';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rfm-detail',
  templateUrl: './rfm-detail.component.html',
  styleUrls: ['./rfm-detail.component.css']
})
export class RfmDetailComponent implements OnInit {
  rfm: any;
  showrfm: any;
  sub: any;
  Catid:any=[];
  user: any;
users:FormGroup

constructor(private app_Service: UserService,private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {

    this.users = this.fb.group({
      "title":[''],
      "cat":[''],
      "des":[''],
      "stat":[''],
      "question1":[''],
      "answer1":[''],
      "question2":[''],
      "answer2":[''],
      "question3":[''],
      "answer3":[''],
    });
  
   
    this.sub = this.route.queryParams
.subscribe(params => {   
  this.Catid = params['rid'] || '0';}
  )
  alert(this.Catid)
  this.mycreatedrfm(this.Catid)
  }


 
  mycreatedrfm(id){
    this.app_Service.showmyrfm(this.Catid).subscribe(rfm => {
      console.log(rfm)
      this.rfm = rfm.msg;
      for(let abc of this.rfm){
        console.log(abc)
        console.log(this.rfm)
      }
      this.showrfm = rfm
    });
  }

}
