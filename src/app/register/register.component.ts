import { Component, OnInit } from '@angular/core';
import {AlertService, AuthenticationService} from '../_services';
import {Router} from '@angular/router';
import {FormControl, NgForm, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import {RecapchaService} from '../recapcha/recapcha.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
    providers:[RecapchaService]
})
export class RegisterComponent implements OnInit {
    model: any = {};
    recaptcha= true;
    password;
    isSubmit: boolean= false;
    loading: boolean= false;
    password2;
    userFormControl = new FormControl('', [
        Validators.required
    ]);
    passwordFormControl = new FormControl('', [
        // Validators.pattern(this.password),
        Validators.minLength(8),
        Validators.maxLength(30),
        Validators.required]);
    emailFormControl = new FormControl('', [
        Validators.required
    ]);
    firstnameFormControl = new FormControl('', [
        Validators.required ]);
    lastnameFormControl = new FormControl('', [
        Validators.required]);
     wrongPass: boolean;

  constructor(private authService: AuthenticationService, private  router: Router,private recptha: RecapchaService, private  alertService: AlertService) { }

  ngOnInit() {
    window.scroll(0,0);

  }

    freeSignup() {
        this.loading = true;
        if(this.recaptcha == true && this.wrongPass== true) {
        this.authService.brand_Signup(this.model.username, this.model.firstname,this.model.lastname,this.model.email,  this.model.password)
            .subscribe(
                data => {
                    Swal.fire('Your account has been Registered,', 'Your Account will expire in 7 days', 'success');
                    this.router.navigate(['/login']);
                    localStorage.setItem('newUSerEmail', this.model.email);

                },
                error => {
                    Swal.fire('Account Not Register', 'Some Server Side Error', 'error');
                    this.loading = false;
                });
                this.recptha.resetImg();
        }
    }


    paidSignup() {
        this.loading = true;
        if(this.recaptcha == true && this.wrongPass==true) {
        this.authService.brand_Signup(this.model.username, this.model.firstname,this.model.lastname,this.model.email,  this.model.password)
            .subscribe(
                data => {
                    Swal.fire('Your account has been Registered,', 'Your Account will expire in 7 days', 'success');
                    this.router.navigate(['/payment']);
                    localStorage.setItem('newUSerEmail', this.model.email);

                },
                error => {
                    // if(error.status===400){
                    //     Swal.fire('Email Already Exist','error');
                    // }
                    Swal.fire('Already Exist', 'Email Already Exist', 'error');
                    this.loading = false;
                });
                this.recptha.resetImg();
        }
    }

    showAllert(){
      if(this.model.password!= this.password2){
          Swal.fire('oops','Password should be same','error');
          this.wrongPass= false;
      }
      else {
          this.wrongPass= true;
      }
    }
}
