import { Component, OnInit, AfterViewInit } from '@angular/core';
import {AuthenticationService} from '../_services';
import {UserService} from '../_services'
import {OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {Headers, Response} from '@angular/http';
import {HttpService} from '../services/http-service';
import {PushNotificationsService} from 'angular2-notifications';
import {Config} from '../../config';
import {DataService} from '../_services';
import swal from 'sweetalert2';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  model: any;
  email: void;

  constructor(private obj: AuthenticationService,private app_service: UserService,private http: HttpService) { }
  ngOnInit() {
    // window.scroll(0,0);

  }
  scrollTop() {
    window.scrollTo(0, 0);
}

sub() {
  this.http.post(Config.api+'/newsletteremail/', {
    email: this.email
   }).subscribe((response: Response) => {
               if(response.status==202){
              Swal.fire('You will get alerts from our Newsletter')

          }
   });
  }

}
