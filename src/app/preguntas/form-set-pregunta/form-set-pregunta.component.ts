import {Component, Input, OnInit} from '@angular/core';
import {NgForm, FormControl, FormBuilder, FormGroup, FormArray} from "@angular/forms";

import {Pregunta} from "../model/pregunta";
import {Respuesta} from "../../respuesta/model/respuesta";
import {PreguntasService} from "../preguntas.service";

@Component({
  selector: 'app-form-set-pregunta',
  templateUrl: './form-set-pregunta.component.html',
  styleUrls: ['./form-set-pregunta.component.css']
})

export class FormSetPreguntaComponent implements OnInit {
  @Input() pregunta: Pregunta;

  preguntaForm : FormGroup;

  /*
  formcontrol = new FormControl();
  pregunta = new Pregunta();
  //respuestas : Respuesta[] = [];
*/
  nrespuestas=0;


  constructor(
    private fb: FormBuilder,
    //private preguntasService : PreguntasService
  ) {
    this.createForm();
  }

  createForm() {
    this.preguntaForm = this.fb.group({
      id: '',
      propietario_id: '',
      titulo: '',
      texto: '',
      respuestas: this.fb.array([])
    });
  }

  addRespuesta2() {
    this.respuestas.push(this.fb.group(new Respuesta()));
    this.nrespuestas++;
  }

  ngOnChanges() {
    this.rebuildForm();
  }

  rebuildForm(){
    this.preguntaForm.reset({texto: this.pregunta.texto});
  }

  //funcion que obtiene el balor de un form array
  get respuestas(): FormArray {
    return this.preguntaForm.get('respuestas') as FormArray;
  };

  prepareSavePregunta(): Pregunta {
    const formModel = this.preguntaForm.value;

    // deep copy of form model lairs
    const respuestasDeepCopy: Respuesta[] = formModel.respuestas.map(
      (respuesta: Respuesta) => Object.assign({}, respuesta)
    );

    // return new `Hero` object containing a combination of original hero value(s)
    // and deep copies of changed form model values
    const savePregunta: Pregunta = <Pregunta>{
      id: 1,
      propietario_id: 1,
      titulo: formModel.titulo as string,
      texto: formModel.texto as string,
      // addresses: formModel.secretLairs // <-- bad!
      respuestas: respuestasDeepCopy
    };

    return savePregunta;
  }






  ngOnInit() {
    //this.pregunta.respuestas = [];
  }

  onSubmit(f: NgForm){
    this.pregunta = this.prepareSavePregunta();
    this.rebuildForm();
  }

  addRespuesta(){
    let r:Respuesta = new Respuesta();
    r.id=this.nrespuestas;
    r.texto="";
    r.correcta=false;


    //this.respuestas.push(r);
    this.nrespuestas++;
    this.pregunta.respuestas.push(r);
  }
  savePregunta(pregunta:Pregunta) {
    this.pregunta=pregunta;
    console.log(this.pregunta.titulo);
    alert("ok");
  }

}
