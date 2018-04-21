import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import {UsersRoutingModule} from './users-routing.module';
import {UserService} from "./service/user.service";
import {UsersComponent} from "./users.component";
import {UserDetailComponent} from "./user-detail/user-detail.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {FormsModule} from "@angular/forms";
import { UserFormComponent } from './user-form/user-form.component';



@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
  ],
  declarations: [
    UsersComponent,
    UserDetailComponent,
    DashboardComponent,
    UserFormComponent,
  ],
  providers: [
    UserService
  ]
})
export class UsersModule { }
