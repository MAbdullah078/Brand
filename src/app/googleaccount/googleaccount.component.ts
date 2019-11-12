import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GoogleaccountService} from './googleaccount.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-googleaccount',
  templateUrl: './googleaccount.component.html',
  styleUrls: ['./googleaccount.component.css']
})
export class GoogleaccountComponent implements OnInit {
  endRequest;
  sub; id;
  code;
  constructor(private route: ActivatedRoute,
    private router: Router,private test : GoogleaccountService) { }

  ngOnInit() {
      
       this.sub = this.route.params.subscribe(params => {
        this.authenticate(params['code']);
        this.id = +params; 
     
  console.log(params['code']);
  // console.log(params,'params')
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
