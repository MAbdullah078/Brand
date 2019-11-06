import { Component, OnInit, ViewChild } from '@angular/core';
import {UserService} from '../_services';
import {Router} from '@angular/router';
import {FormControl, NgForm, Validators, FormGroup, FormBuilder} from '@angular/forms';
import swal from 'sweetalert2';
import { Config } from '../../config';
import { Http,Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { FileValidatorDirective } from './FileValidator.directive';
import {MatStepper} from '@angular/material';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './rfm.component.html',
  providers:[UserService],
  styleUrls: ['./rfm.component.scss']
})
export class RfmComponent implements OnInit {
  
//   rfmFormControl = new FormControl('', [
//     Validators.required
// ]);
@ViewChild('stepper') stepper: MatStepper;
StepNo = '1';
    wesites: any;
    services: any;
    title: any;
    fileList: any=[];
    category: any;
    description: any;
    pictures: any;
    video: any;
    file: any;
    questions: any;
    answers: any;
    questions2: any;
    answers2: any;
    questions3: any;
    answers3: any;
    offer_to_influencer: any;
    input: FormData;
    url: any = 'JPG, GIF, PNG';
  videoPreviewPath: any;
  sanitizer: any;
  base64textString: string;
  fileToUpload: File;
  firstFormGroup: any;
  secondFormGroup: FormGroup;
  thirdFromGroup: FormGroup;
  fourthFromGroup: FormGroup;
  stFpage: FormGroup;
  // updataform: FormGroup
  // // check($event) { }
  // onchangefile($event) {

  // }



  constructor(private router:Router, private obj: UserService, private _formBuilder: FormBuilder,private fileUploadService : UserService,
    private https: HttpClient,
    private newService : UserService, private http: Http) { }

  ngOnInit() {

    window.scroll(0,0);

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });

    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
      thirdCtrl: ['', Validators.required]
    });

    this.thirdFromGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required],
    });

    this.fourthFromGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required],
      sixthCtrl: ['', Validators.required],
      fifthCtrl2: ['', Validators.required],
      sixthCtrl2: ['', Validators.required],
      seventhCtrl: [],
      seventhCtrl2: [],
    });


    this.stFpage= new FormGroup({
      // add_images: new FormControl("", [FileValidatorDirective.validate]),
      file: new FormControl("", [FileValidatorDirective.validate])

    });
  }
  model: any= {};


onChange(event: EventTarget) {
  this.pictures = new FormData();
  const eventObj: MSInputMethodContext = <MSInputMethodContext>event;
  const target: HTMLInputElement = <HTMLInputElement>eventObj.target;
  this.pictures.append('fileToUpload', target.files[0]);
  // console.log(this.pictures);
  console.log('Name is :',  this.pictures)
  // //alert(this.pictures);
}


onChangefile(event: EventTarget) {
  this.input = new FormData();
  const eventObj: MSInputMethodContext = <MSInputMethodContext>event;
  const target: HTMLInputElement = <HTMLInputElement>eventObj.target;
  this.input.append('fileToUpload', target.files[0]);
}

onChange2(event: EventTarget) {
  this.input = new FormData();
  const eventObj: MSInputMethodContext = <MSInputMethodContext>event;
  const target: HTMLInputElement = <HTMLInputElement>eventObj.target;
  this.input.append('fileToUpload', target.files[0]);
  // //alert(this.input)
}
_handleReaderLoaded(readerEvt) {
  console.log('base64');
  const binaryString = readerEvt.target.result;
  this.base64textString = btoa(binaryString);
  // console.log(this.base64textString);
}

onChange3(event: EventTarget) {
  this.video = new FormData();
  const eventObj: MSInputMethodContext = <MSInputMethodContext>event;
  const target: HTMLInputElement = <HTMLInputElement>eventObj.target;
  this.file.append('fileToUpload', target.files[0]);
  // console.log(this.pictures);
  console.log('Name is :',  this.video)
  // //alert(this.video);
}

readUrl(event: any) {
  if (event.target.files && event.target.files[0]) {
    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.url = e.target.result;
      console.log(this.url);
    };
  
    reader.readAsDataURL(event.target.files[0]);
  }
}


onSubmit(f: NgForm,offer_to_influencer){
    
  this.obj.post_Request(this.model.title, this.model.category, this.model.description,
    this.pictures, this.video, this.file, 
     this.model.question1,this.model.answer1,
     this.model.question2,this.model.answer2, 
     this.model.question3,this.model.answer3, 
      offer_to_influencer,this.model.url).subscribe(
      data =>{
          console.log(data);
          swal.fire('RFM successfully Created', '', 'success');

          this.router.navigate(['/my-rfm'])

      },
      error1 => {
          swal.fire('Your Data is invalid', 'or we have some server error ', 'error')
      })
      console.log(this.model.title)
      console.log(this.pictures)
      // console.log(this.file)
      // console.log('video upload')
      console.log(this.model.category)
      console.log(this.model.description)
      console.log(this.model.question1)
      console.log(this.model.answer1)
      console.log(this.model.question2)
      console.log(this.model.answer2)
      console.log(this.model.question3)
      console.log(this.model.answer3)
      console.log(this.model.offer_to_influencer)
      console.log(this.model.url)
      

      // this.upload();
      
}


FuncCheckNumberOfImages() {
  if (this.fileList.length >= 5) {
    return false;
  } else {
    return true;
  }
}

// createShowCase(f: NgForm){
//   // console.log('images is',this.imageName);
//       //  this.imageAddress= this.apiURL+ this.imageName;
//     this.obj.post_Request(
//       // this.imageAddress,
//       this.model.title, this.model.category, this.model.description,
//     this.pictures, this.video, this.file, 
//      this.model.question1,this.model.answer1,
//      this.model.question2,this.model.answer2, 
//      this.model.question3,this.model.answer3, 
//       this.model.offer_to_influencer,this.model.url
//     ).subscribe(

//       data => {

//         swal.fire('RFM successfully Created', '', 'success');

//           this.router.navigate(['/my-rfm'])

//       },
//       error => {

//         // console.log('Error isss', error);
//         swal.fire('RFM Create error', '', 'error')

//       });
//   }

upload() {
  this.https.post(
    Config.Imageurlupload,
    this.pictures, { responseType: 'text' }).subscribe(data => {
      if (data === "Sorry, not a valid Image.Sorry, only JPG, JPEG, PNG & GIF files are allowed.Sorry, your file was not uploaded.") {
      }
      else {     
        console.log(data);
        // //alert(data);
        this.pictures = data;
        // this.onSubmit();
        // //alert('ok')
      }
    });
}


}
