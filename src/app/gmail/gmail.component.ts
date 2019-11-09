import { Component, OnInit } from '@angular/core';
import  {UserService} from '../_services';
import { ActivatedRoute, Router } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider } from "angular5-social-login";
import { AuthService } from "angular5-social-login";
import { Http , Headers} from '@angular/http'
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-gmail',
  templateUrl: './gmail.component.html',
  styleUrls: ['./gmail.component.css']
})
export class GmailComponent implements OnInit {

  constructor(private app_Service: UserService,  private router: Router, private http: Http,private _http: HttpClient,private authService: AuthService ) { }

  ngOnInit() {
    window.scroll(0,0)
    // this.integrategmail();
  }
  getemail;
  integrategmail(){
    this.app_Service.gmail().subscribe( data => {
      this.getemail = data;
      console.log(this.getemail,'link');
    });
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(this.integrategmail);
  }
  currentUser
  link
  data
  getLink(){
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      let headers = new Headers({'Authorization': 'JWT ' + JSON.parse(localStorage.getItem('currentUser')).token});
      headers.append('Content-Type', 'application/json');
    return this.http.get('http://192.168.29.166:8000//email/gmailAuthenticate',{headers:headers}).subscribe(data=>{
      this.data=data.json()
      this.link=this.data['link']
      if(this.link!=''){
        window.open(this.link,"_blank")
      }
    })
  }
}
