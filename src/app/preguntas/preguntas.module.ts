import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreguntasComponent } from './preguntas.component';
import { PreguntasService } from './preguntas.service';
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import { FormSetPreguntaComponent } from './form-set-pregunta/form-set-pregunta.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RespuestaComponent } from '../respuesta/respuesta.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [PreguntasComponent, FormSetPreguntaComponent, RespuestaComponent],
  providers: [PreguntasService]
})
export class PreguntasModule { }
