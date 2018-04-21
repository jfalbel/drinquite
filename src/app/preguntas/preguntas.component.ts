import { Component, OnInit } from '@angular/core';
import {Pregunta} from "./model/pregunta";
import {Respuesta} from "../respuesta/model/respuesta";
import {ajaxGetJSON} from "rxjs/observable/dom/AjaxObservable";

import { PreguntasService } from './preguntas.service';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  public preguntas

  constructor(private preguntasService : PreguntasService) { }

  ngOnInit() {
    this.getPreguntas();
  }

  getPreguntas(): void {
    this.preguntasService.getPreguntas().subscribe(
      result => {
        console.log(result);
        this.preguntas = <Pregunta []>result.data;
      }
    );


    /*let req = this.http.get('http://localhost/preguntas/list',{headers:header}).subscribe(
      data => {
        console.log(data);
        this.
      },
      error => {
        console.log(<any>error);
      }
    );*/
  }

  getList(){
    let pjson = '{"propietario_id":"1","titulo":"Música","texto":"¿Cual es la canción más famosa de Estopa?","respuestas":{"1" : "Raja de tu falda","2" : "Paseo","3" : "Como camarón","4" : "Lunes"}}';



    //respuesta = new Respuesta();


  }

}
