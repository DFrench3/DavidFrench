import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template : `<re-captcha
  (resolved)="resolved($event)"
  siteKey="6Lfl6k0eAAAAAEbFap12JsyrPoaFbI8S_OEvwCfn"
></re-captcha>`,


})
export class AppComponent {
  title = 'David French';
  
  }


