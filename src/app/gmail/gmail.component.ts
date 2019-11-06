import { Component, OnInit } from '@angular/core';
import  {UserService} from '../_services';

@Component({
  selector: 'app-gmail',
  templateUrl: './gmail.component.html',
  styleUrls: ['./gmail.component.css']
})
export class GmailComponent implements OnInit {

  constructor(private app_Service: UserService,) { }

  ngOnInit() {
    window.scroll(0,0)
    this.integrategmail();
  }

  integrategmail(){
    this.app_Service.gmail().subscribe(() => {
    });
  }

}
