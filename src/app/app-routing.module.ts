import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { DashboardComponent } from './users/dashboard/dashboard.component';
import { LoginComponent } from './app-auth/login/login.component';
import {PreguntasComponent} from "./preguntas/preguntas.component";
import {FormSetPreguntaComponent} from "./preguntas/form-set-pregunta/form-set-pregunta.component";

const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    { path: 'preguntas/get', component: PreguntasComponent },
    { path: 'preguntas/set', component: FormSetPreguntaComponent },
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule { }
