import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';


@Injectable()
export class AppAuthService {

  auth0 = new auth0.WebAuth({
    clientID: 'TAwZ6z7iTMd3W7OwDYXtLd672K2ephV5',
    domain: 'drinquite.eu.auth0.com',
    responseType: 'token id_token',
    audience: 'https://drinquite.eu.auth0.com/userinfo',
    redirectUri: 'http://localhost:4200/dashboard',
    scope: 'openid'
  });

  constructor(public router: Router) {}

  public login(): void {
    this.auth0.authorize();
  }

}
