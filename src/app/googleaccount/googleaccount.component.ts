import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GoogleaccountService} from './googleaccount.service';
import { from } from 'rxjs';
import 'rxjs/add/operator/filter';
@Component({
  selector: 'app-googleaccount',
  templateUrl: './googleaccount.component.html',
  styleUrls: ['./googleaccount.component.css']
})
export class GoogleaccountComponent implements OnInit {
  endRequest;
  sub; id;
  code;
  order: string;
  href
  codeSplit
  statusSplit
  key
  constructor(private route: ActivatedRoute,
    private router: Router,private test : GoogleaccountService) { }
   
  ngOnInit() {
    // console.log(window.location.href,'Window location')
    this.href=this.router.url
    // console.log(this.href,'Href')
    // console.log(this.href.split('&code='),'Href Code')
    this.codeSplit=this.href.split('&code=')
    // console.log(this.codeSplit[1].split('&scope='),'Href Code split')
    this.statusSplit=this.codeSplit[1].split('&scope=')
    this.key = this.statusSplit[0]
    console.log(this.key,'key')
    this.authenticate(this.key);
//     this.route.queryParams
//     .filter(params => params.order)
//     .subscribe(params => {
//       console.log(params); // {order: "popular"}
// alert(this.order);
//       this.order = params.order;
//       console.log(this.order); // popular
//     });
  //      this.sub = this.route.params.subscribe(params => {
  //       this.authenticate(params['code']);
  //       this.id = +params; 
  //   //  alert(params['code']);
  // console.log(params['code']);
  // console.log(params,'params')
  //     });
  }
  authenticate(key) {
     this.test.googleaccounts(this.key)
      .subscribe(
        data => {
// alert('testing google')
        });
  }
}
