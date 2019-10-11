import {Component, OnInit, OnDestroy, AfterViewInit} from '@angular/core';
import {HttpService} from '../services/http-service';
// import {Headers, Response, Http} from '@angular/http';
import {ActivatedRoute, Router} from '@angular/router';
import { FormBuilder, Validators, FormGroup, NgForm } from '@angular/forms';
import 'rxjs/add/operator/map'
import {Config} from '../../config';
// import { SweetAlertService } from 'angular-sweetalert-service';
import {PagerService} from '../_services/paginator.service';
import Swal from 'sweetalert2';
import swal from 'sweetalert2';
import {runInThisContext} from "vm";
import {Observable} from "rxjs/Observable";
import {FormControl} from "@angular/forms";
import { Subscription } from 'rxjs/Subscription';
import {Headers, Response, Http} from '@angular/http';
import { AuthenticationService } from '../_services';



@Component({
    selector: 'app-confirm-password',
    templateUrl: './confirm-password.component.html',
    styleUrls: ['./confirm-password.component.scss']
})

export class ConfirmPasswordComponent  {
    public sub: Subscription;
    pass1;
    pass2;
    code;
    hide = true;
  hide2 = true;
  password;

  form = new FormGroup(
    {
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(this.password),
        Validators.minLength(8),
        Validators.maxLength(30)
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.pattern(this.password),
        Validators.minLength(8),
        Validators.maxLength(30)
      ])
    }
  );
  
    constructor(private fb: FormBuilder,private http: HttpService, private route: ActivatedRoute, private serv: AuthenticationService, private router: Router) { }

    ngOnInit() {
        alert("code")
        this.sub = this.route.params.subscribe(params => {
            this.code = params['code'];
            console.log(this.code)
          });

          
      }
    //   confirmpassword(){
    //     // alert('code')
    //     let headers = new Headers();
    //     headers.append('Content-Type', 'application/json');

    //     this.http.post(Config.api + '/reset_password/', JSON.stringify({
    //             // email: this.email
    //             pass1:this.pass1,
    //             pass2:this.pass2
    //         }),
    //         {headers: headers}).map((response: Response) => response.json()).subscribe(
    //         data => {

    //             Swal.fire(
    //                 'Password Updated',
    //                 '',
    //                 'success'
    //             )
    //         },
    //         error => {

    //             Swal.fire(
    //                 'Error',
    //                 '',
    //                 'error'
    //             )
    //         });
    // }
    forgotpassword() {
        if (this.form.value['password'] != "" && this.form.value['password'] != null && this.form.value['confirmPassword'] != "" && this.form.value['confirmPassword'] != null) {
          this.serv.forgot(this.code, this.form.value['password'], this.form.value['confirmPassword']).subscribe(data => {
            swal.fire({
              type: 'success',
              title: 'Your password is changed',
              showConfirmButton: false,
              timer: 1500
            })
            this.router.navigate(['/login']);
          },
            error => {
              if (error.status == 400) {
                swal.fire({
                  type: 'error',
                  title: 'New and Confirm Password not matached"',
                  showConfirmButton: false,
                  timer: 1500
                })
              }
            });
        }
        else {
          swal.fire({
            type: 'error',
            title: 'Please fill all required fields',
            showConfirmButton: false,
            timer: 1500
          })
        }
      }
    
      showSuccess() {
        swal.fire({
          type: 'success',
          title: 'Welcome to Influexp!<br> You are logged in now',
          showConfirmButton: false,
          width: '512px',
          timer: 4000
        })
      }
}
