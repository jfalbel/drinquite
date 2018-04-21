import { Component, OnInit } from '@angular/core';
import {Respuesta} from "./model/respuesta";

@Component({
  selector: 'form-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.css']
})
export class RespuestaComponent implements OnInit {

  respuesta=new Respuesta();

  constructor() {
    
  }

  ngOnInit() {

  }

}
