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
  googleaccounts(code){
    alert('google');
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let headers = new Headers({'Authorization': 'JWT ' + this.currentUser.token});
    headers.append('Content-Type', 'application/json');
    // let username = localStorage.getItem('username');
    return this.http.get('https://apis.influexpai.com/email/oauth2callback/' + code,{headers: headers}).map((response: Response) => {

    })
    
  }
}
