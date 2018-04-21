import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  session: boolean;
  constructor() { }

  ngOnInit() {
    try {
      this.session = this.getSession();
    } catch (e){
      alert("ok");
    }
  }

  sendLogin(){

  }

  getSession () {
    if (true){
      return true;
    }
  }

}
