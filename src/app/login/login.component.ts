import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Config } from '../../config';
import {HttpService} from '../services/http-service';
import { AlertService, AuthenticationService } from '../_services';
import {Http, Response} from '@angular/http';
import  {UserService} from '../_services';
import {FormControl, NgForm, Validators} from '@angular/forms';
import {RecapchaService} from '../recapcha/recapcha.service';
import swal from "sweetalert2";
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'angular5-social-login';
import {  Headers, RequestOptions,  } from '@angular/http';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angular5-social-login';
import { JwtHelper } from 'angular2-jwt';
@Component({
    moduleId: module.id.toString(),
    templateUrl: 'login.component.html',
    styleUrls: ['login.scss'],
    providers:[RecapchaService]
})

export class LoginComponent implements OnInit {
    model: any = {};
    user: any = {};
    username;
    pic;
    returnUrl: string;
    jwtHelper: JwtHelper = new JwtHelper();
    influencers;
    class1= 'fa fa-eye';
    class2= 'fa fa-eye-splash';
    hide= true;
    recaptcha= true;
    userFormControl = new FormControl('', [
        Validators.required,
    ]);
    passwordFormControl = new FormControl('', [
        Validators.required]);
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private http: HttpService, private https: HttpClient, private usersvc: UserService, private recptha: RecapchaService, private authService: AuthService) { }

    ngOnInit() {
        // reset login status
        window.scroll(0,0);

            this.authenticationService.logout();

            // get return url from route parameters or default to '/'
            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
    }

    private getuser() {
        let cu = JSON.parse(localStorage.getItem('currentUser'));
        this.usersvc.getByUsername(cu.username).subscribe(name => {
            // alert(name.first_name);

            cu.first_name = name['first_name'];
            localStorage.setItem('currentUser', JSON.stringify(cu));

        });
    }

    JWT;
    socialCallBack = (user) => {
      this.user = user;
      console.log(this.user);
      const headers = { 'Content-Type': 'application/json' };
      if (user) {
        const createUser = this.https.post(Config.api + '/sociallogin/', JSON.stringify(
          {
            user
          }), { headers: headers });
  
        createUser.subscribe(data => {
            let user = { 
             user_id: this.jwtHelper.decodeToken(data['token']).user_id,
             username: this.jwtHelper.decodeToken(data['token']).username, 
             token: data['token'] };
            if (user && user.token) {
              localStorage.setItem('loged_in', '1');
              localStorage.setItem('currentUser', JSON.stringify(user));
              localStorage.setItem('profilePhoto' , this.pic);
              // this.router.navigate(['/dashboard'+ this.username]);
              this.router.navigate(['/dashboard']);


              this.showSuccess();
            
            }
          }
        );
      }
    }


    showSuccess() {
        swal.fire({
          type: 'success',
          title: 'You have successfully logged in to influexpert.\n' +
          '\n',
          showConfirmButton: false,
          width: '512px',
          timer: 4000
        });
      }
    








    facebooklogin(): void {
        this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(this.socialCallBack).catch(user => console.log(user));
    
      }
      googlelogin() {
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(this.socialCallBack).catch(message => console.log(message));
      }
    login() {
        this.recaptcha= this.recptha.check();
        // alert('Recaptcha Status is ' + this.recapcha);
        if(this.recaptcha == true) {
            this.authenticationService.login(this.model.username, this.model.password)
                .subscribe(
                    data => {

                        // this.getuser();
                //   if(data.'Response')
                // if(data['Response'] === 'Account is not activated'){
                //     swal.fire({
                //         type: 'error',
                //         title: 'Account is not activated"',
                //         text: 'please varify',
                //         showConfirmButton: false,
                //         width: '512px',
                //         timer: 2000
                  
                //       });
                // }
                // else{
                    // if(data['Response'] !== 'Account is not activated'){
                        this.router.navigate([this.returnUrl]);
                        localStorage.setItem('currentPassword', this.model.password);
                        swal.fire({
                            type: 'success',
                            title: 'You have successfully logged in to influexpai.\n' +
                            '\n',
                            // text: 'Please check your username or password',
                            showConfirmButton: false,
                            width: '512px',
                            timer: 2000
                      
                        });
                    // }
                    },
                    error => {
                        if(error.status== 403){
                            swal.fire({
                                type: 'error',
                                title: 'Account is not activated"',
                                text: '',
                                showConfirmButton: false,
                                width: '512px',
                                timer: 2000
                          
                              });
                              this.recptha.resetImg();
                        }
                        // swal('Invalid username or password', 'error');
                        if(error.status== 400){
                        swal.fire({
                            type: 'error',
                            title: 'Wrong Credantials',
                            text: 'Please check your username or password',
                            showConfirmButton: false,
                            width: '512px',
                            timer: 2000
                      
                          });
                          this.recptha.resetImg();
                        }
                    //    this.recptha.capchaText = "";
                    // error => {
                    //     this.alertService.error('Invalid username or password.');
                     });
        }
    }
    doThis() {

        window.location.href = Config.api + '/tweeter_login/';
    }
       doThisFB() {

        window.location.href = Config.api + '/oauth/login/facebook/';
    }
}
