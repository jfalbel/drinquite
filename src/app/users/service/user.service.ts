import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from '../../messages/service/message.service';

//Importamos el "modelo"
import { User } from '../model/user';
//Importamos la constante USERS del mock-users
import { USERS } from '../model/mock-users';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import set = Reflect.set;



@Injectable()
export class UserService {

    constructor(/*private http: HttpClient,private HttpHeaders, */private messageService: MessageService) { }

    url:String = "localhost/users";

    //Metodo get de los usuarios
    getUsers(): Observable<User[]> {
    // Todo: send the message _after_ fetching the heroes
    this.messageService.add('User Service: Recibidos todos los usuarios');
    //let json = JSON.stringify(user);
    //let params = "json="+json;
    //Establecemos cabeceras
    /*let headers = new HttpHeaders().set('Content-Type','application/json');
    headers.set('api_token','aaa');
    return this.http.post(this.url, null, {headers: headers});*/
    //return this.http.get("localhost/users")

    return of (USERS);
  }

    //Metodo get de los usuarios
    getUser(id: number): Observable<User> {
        // Todo: send the message _after_ fetching the heroes
        this.messageService.add('UserService: Recibido un usuario');
        return of (USERS.find(user => user.id === id));
    }

    /*createUser(user: User): Observable<User>{
      let json = JSON.stringify(user);
      let params = "json="+json;
      //Establecemos cabeceras
      let headers = new HttpHeaders().set('Content-Type','application/json');
      headers.set('api_token','aaa');
      return this.http.post(this.url, params, {headers: headers});

    }*/

}
