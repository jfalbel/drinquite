import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MessageService } from './messages/service/message.service';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './app-auth/login/login.component';
//import { AppAuthModule } from './app-auth/app-auth.module';
import {UsersModule} from "./users/users.module";
import { PreguntasModule } from './preguntas/preguntas.module';

@NgModule({
    declarations: [
        AppComponent,
        MessagesComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        // import HttpClientModule after BrowserModule.
        HttpClientModule,
        FormsModule,
        AppRoutingModule,
        //AppAuthModule,
        UsersModule,
        PreguntasModule
    ],
    providers: [
        MessageService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
