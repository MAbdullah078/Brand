import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';


@Component({
  selector: 'app-my-rfm',
  templateUrl: './my-rfm.component.html',
  styleUrls: ['./my-rfm.component.css']
})
export class MyRfmComponent implements OnInit {
  myrfm: any;
  rfm: any;
  showrfm: any;

  constructor(private app_Service: UserService) { }

  ngOnInit() {
    window.scroll(0,0)
    this.mycreatedrfm()
  }




  deletemyrfm(id){
    this.app_Service.deleterfm(id).subscribe(rfm =>{
      console.log('delete')
      alert('deleted')
      this.mycreatedrfm()
    })
  }

mycreatedrfm(){
  this.app_Service.myrfm().subscribe(rfm => {
    console.log(rfm)
    this.rfm = rfm.results;
    for(let abc of this.rfm){
      console.log(abc)
      console.log(this.rfm)
    }
    this.showrfm = rfm
  });
}

}
