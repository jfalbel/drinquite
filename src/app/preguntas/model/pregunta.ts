import {Respuesta} from "../../respuesta/model/respuesta";

export class Pregunta {
  id: number =0;
  propietario_id: number = 0;
  titulo: string = '';
  texto: string = '';
  respuestas: Respuesta []= [];
}
