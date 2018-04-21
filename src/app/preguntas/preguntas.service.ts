import { Injectable } from '@angular/core';
import { PREGUNTAS } from './model/mock-preguntas';
import {of} from "rxjs/observable/of";
import {Observable} from "rxjs/Observable";
import {Pregunta} from "./model/pregunta";
import {httpFactory} from "@angular/http/src/http_module";
import {XHRBackend} from "@angular/http";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class PreguntasService {



  ngOnInit(): void {
    //try some HTTP request:
    this.http.get('some/url').subscribe(data => {
      console.log(data);
    });
  }

  constructor(private http: HttpClient) { }

  getPreguntasMock(): Observable<Pregunta[]> {

    return of (PREGUNTAS);
  }
  getPreguntas(): Observable<any> {
    let header = new HttpHeaders().set('Content-Type','application/json');
    let req = this.http.get('http://localhost/preguntas/list',{headers:header});
    return req;

    //return of (PREGUNTAS);
  }
}
