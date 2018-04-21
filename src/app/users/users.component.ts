import { Component, OnInit } from '@angular/core';
import { User } from './model/user';
//Importar desde el fichero mock
//import { USERS } from '../mock-users';

//En lugar del fichero, importamos del servicio
import { UserService } from './service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    users: User[];
    selectedUser: User;

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.getUsers();
  }

    onSelect(user: User): void {
        this.selectedUser = user;
    }
    getUsers(): void {
        this.userService.getUsers().subscribe(users => this.users = users);
    }

}
