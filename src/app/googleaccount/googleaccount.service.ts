import { Injectable } from '@angular/core';

// import { HttpClient } from '@angular/common/http';
import { Http, Headers, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
// import { Headers, Http, Response } from '';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class GoogleaccountService {
  currentUser;
  constructor(private http : Http) { }
  googleaccounts(uid){
    // alert('google');
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let headers = new Headers({'Authorization': 'JWT ' + currentUser.token});
    headers.append('Content-Type', 'application/json');
    // let username = localStorage.getItem('username');
    return this.http.get('http://192.168.29.164:8000/email/oauth2callback/' + uid,{headers: headers})
  
  }
}
