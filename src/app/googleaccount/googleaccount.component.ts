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
  constructor(private route: ActivatedRoute,
    private router: Router,private test : GoogleaccountService) { }

  ngOnInit() {
//     this.route.queryParams
//     .filter(params => params.order)
//     .subscribe(params => {
//       console.log(params); // {order: "popular"}
// alert(this.order);
//       this.order = params.order;
//       console.log(this.order); // popular
//     });
       this.sub = this.route.params.subscribe(params => {
        this.authenticate(params['code']);
        this.id = +params; 
    //  alert(params['code']);
  console.log(params['code']);
  console.log(params,'params')
      });
  }
  authenticate(uid) {
     this.test.googleaccounts(uid)
      .subscribe(
        data => {
// alert('testing google')
        });
  }
}
