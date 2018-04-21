import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {UserFormComponent} from "./user-form/user-form.component";

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'users/create', component: UserFormComponent },
  { path: 'userdetail/:id', component: UserDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dash', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
