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

window.scroll(0,0)

    this.users = this.fb.group({
      "title":[''],
      "cat":[''],
      "des":[''],
      "question1":[''],
      "answer1":[''],
      "question2":[''],
      "answer2":[''],
      "question3":[''],
      "answer3":[''],
      "offer": [''],
      "url": [''],
      "stat":['']
    });
  
   
    this.sub = this.route.queryParams
.subscribe(params => {   
  this.Catid = params['rid'] || '0';}
  )
  // alert(this.Catid)
  this.mycreatedrfm(this.Catid)


  console.log(this.mycreatedrfm)
  }


updaterfm(title ,url,cat,des,
  // pic,
    
  question1,answer1,
  question2,answer2,
  question3,answer3,
  offer
  // ,stat
  ){
    console.log(title ,url,cat,des,
    
      question1,answer1,
      question2,answer2,
      question3,answer3,
      offer)
  this.app_Service.editrfm(this.Catid, title ,url,cat,des,
    // pic,
    
    question1,answer1,
    question2,answer2,
    question3,answer3,
    offer).subscribe(data=> {

  })
  // this.app_Service.editrfm(this.Catid,
  //   this.users.controls.title.value,
  // this.users.controls.cat.value,
  // this.users.controls.value.des,
  // this.users.controls.value.question1,
  // this.users.controls.value.answer1,this.users.controls.value.question2,this.users.controls.value.answer2,
  // this.users.value.question3,this.users.value.answer3,this.users.value.offer_to_influencer,
  // this.users.value.urlofproduct,this.users.value.stat).subscribe(data=> {

  // })
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