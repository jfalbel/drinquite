import { Component, OnInit, Input } from '@angular/core';
import {User} from '../model/user';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { UserService }  from '../service/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

    @Input() user: User;

  constructor(private route: ActivatedRoute, private userService: UserService, private location: Location) {

  }

  ngOnInit() {
      const id = +this.route.snapshot.paramMap.get('id');
      this.userService.getUser(id).subscribe(user => this.user = user);
  }
    goBack(): void{
        this.location.back();
    }

}
