import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user = new User();
  constructor() { }

  ngOnInit() {
  }

  onSubmit(f: NgForm){
    //this.get
  }

  saveUser(user:User) {
    this.user=user;
    console.log(this.user.username);
    alert("ok");
  }
}
