import { Component, OnInit } from '@angular/core';
import  {UserService} from '../_services';
import { ActivatedRoute, Router } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider } from "angular5-social-login";
import { AuthService } from "angular5-social-login";
@Component({
  selector: 'app-gmail',
  templateUrl: './gmail.component.html',
  styleUrls: ['./gmail.component.css']
})
export class GmailComponent implements OnInit {

  constructor(private app_Service: UserService,  private router: Router, private authService: AuthService ) { }

  ngOnInit() {
    window.scroll(0,0)
    // this.integrategmail();
  }
  getemail;
  integrategmail(){
    this.app_Service.gmail().subscribe( data => {
      this.getemail = data;
      console.log(data);
    });
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(this.integrategmail);
  }
}
