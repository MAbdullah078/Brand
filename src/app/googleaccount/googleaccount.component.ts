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
    this.endRequest = this.sub = this.route.params.subscribe(params => {
      this.authenticate(params['code']);
    });
  }
  authenticate(uid) {
    this.endRequest = this.test.googleaccounts(uid)
      .subscribe(
        data => {
// alert('testing google')
        });
  }
}
