import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  bntStyle='navbar';
  check:boolean=false;

  onclick(){
    if(this.check ==false){
      this.check = true;
    }
    else {
      this.check = false;
    }
  }
  constructor() {

   }

  ngOnInit(
  

  ): void {
  }

}
