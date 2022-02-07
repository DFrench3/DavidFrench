import { Component, OnInit } from '@angular/core';
import { RecaptchaModule, RecaptchaFormsModule } from "ng-recaptcha";

@Component({
  selector: 'app-contact-content',
  templateUrl: './contact-content.component.html',
  styleUrls: ['./contact-content.component.css']

})
export class ContactContentComponent implements OnInit {
  
  captcha:string;

  constructor( ) { 
    this.captcha ='';
  }

  ngOnInit(): void {
  }
  resolved(captchaResponse:string){
    this.captcha = captchaResponse;
    console.log(this.captcha);
  }

}
