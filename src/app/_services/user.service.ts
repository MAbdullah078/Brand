import { Injectable } from '@angular/core';
import { RequestOptions, Response, Headers } from '@angular/http';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Config} from '../../config';
import {Http} from '@angular/http';
import { User } from '../_models';
import {tap} from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: any;
    rejectRFM(id: any) {
        throw new Error("Method not implemented.");
    }
    constructor(private http: Http) { }

    getAll() {
        return this.http.get(Config.api+'/users/', this.jwt()).pipe(tap((response: Response) => {
          return response.json();
        }))
    }

    getByUsername(id: string) {
        return this.http.get(Config.api+'/users/' + id, this.jwt()).pipe(tap((response: Response) => {
          return response.json();
        }))
    }

    myrfm(){
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      let headers = new Headers({'Authorization': 'JWT ' + this.currentUser.token});
      headers.append('Content-Type', 'application/json');
      // let username = localStorage.getItem('username');
      return this.http.get(Config.api+'/gbap/',{headers: headers}).map((response: Response) => {
        return response.json();
      })
      
    }

    showmyrfm(id){
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      let headers = new Headers({'Authorization': 'JWT ' + this.currentUser.token});
      headers.append('Content-Type', 'application/json');
      // let username = localStorage.getItem('username');
      alert(id)
      return this.http.get(Config.api+'/bap/?id='+id,{headers: headers}).map((response: Response) => {
        return response.json();
      })
      
    }

editrfm(id,ti,url,ca,des,
  // pic,
  q1,a1,q2,a2,q3,a3,offer){
//title ,url,cat,des,
    
// question1,answer1,
// question2,answer2,
// question3,answer3,
// offer
  this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  let headers = new Headers({'Authorization': 'JWT ' + this.currentUser.token});
   // return this.loaderHttp.post('https://apis.influexpai.com/bap/',
      return this.http.put(Config.api+'/bap/?id=' + id,
  {
      'title':ti,
      'category' :[ca],
      'description': des,
      // 'pictures' :[pic],
      // 'video' :[video],
      // 'file' :[file],
      'question1' :q1,
      'answer1': a1,
      'question2' :q2,
      'answer2': a2,
      'question3' :q3,
      'answer3': a3,
      'offer_to_influencer' :offer,
      'urlofproduct': url,
     },
     {headers: headers}).map((response: Response) => {
      if(response.status==202){
          Swal.fire('Updated', 'success')

      }
      console.log(response)
  });
}


    getUserData() {
      // let currentUser= localStorage.getItem('currentUser');
      // let username = localStorage.getItem('username');
      // let username = localStorage.getItem('currentUser');
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
if ( this.currentUser != null ){
let username =  this.currentUser.username;
      return this.http.get(Config.api + '/influencer_profile_get_edit/' + username).map((response: Response) => response.json());
    }
  }


  deleterfm(id){
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let headers = new Headers({'Authorization': 'JWT ' + this.currentUser.token});
    return this.http.delete(Config.api+'/bap/?id=' + id,{headers: headers}).pipe(tap((response: Response) => {
      return response.json();
    }))

  }


    post_Request(title, category, description ,pictures, video, file, question1,answer1,question2,answer2, question3,answer3,offer_to_influencer,url) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      let headers = new Headers({'Authorization': 'JWT ' + this.currentUser.token});
       // return this.loaderHttp.post('https://apis.influexpai.com/bap/',
          return this.http.post(Config.api+'/bap/',
      {
          'title':title,
          'category' :[category],
          'description': description,
          'pictures' :[pictures],
          'video' :[video],
          'file' :[file],
          'question1' :question1,
          'answer1': answer1,
          'question2' :question2 || 'null',
          'answer2': answer2 || 'null',
          'question3' :question3  || 'null',
          'answer3': answer3  || 'null',
          'offer_to_influencer' :offer_to_influencer,
          'urlofproduct': url,
         },
         {headers: headers}).map((response: Response) => {
          if(response.status==202){
              Swal.fire('Your Request For Marketing Services has been Post','Please Wait our Admin will Contact You', 'success')

          }
          console.log(response)
      });
}



    getUserTweets(username: string) {
        return this.http.get(Config.api+'/gettweets/' + username+'/', this.jwt()).pipe(tap((response: Response) => {
          return response.json();
        }))
    }
    create(user: User) {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      let headers = new Headers();
      // if (currentUser && currentUser.token) {
      //   headers = new Headers({ 'Authorization': 'JWT ' + currentUser.token });
      // }

      headers.append('Content-Type', 'application/json');

      return this.http.post(Config.api+'/users/', JSON.stringify(user),
        {headers: headers}).pipe(tap((response: Response) => {
        return response.json();
      }))
    }



  update(user: User) {
    return this.http.put(Config.api+'/users/'
      + user.id, user, this.jwt()).pipe(tap((response: Response) => {
      return response.json();
    }))
  }

    delete(id: number) {
        return this.http.delete(Config.api+'/users/' + id, this.jwt()).pipe(tap((response: Response) => {
          return response.json();
        }))
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            const headers = new Headers({ 'Authorization': 'JWT ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }

    gmail(){
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      let headers = new Headers({'Authorization': 'JWT ' + this.currentUser.token});
      headers.append('Content-Type', 'application/json');
      // let username = localStorage.getItem('username');
      return this.http.get(Config.api+'/email/gmailAuthenticate/',{headers: headers}).map((response: Response) => {
        return response.json();
      })
      
    }

}
