import { Pregunta } from './pregunta';
import {Respuesta} from "../../respuesta/model/respuesta";

export const PREGUNTAS: Pregunta[] = [
  {id:1,propietario_id : 1,titulo:"Música",texto:"¿Cual es la canción más famosa de Estopa?",respuestas:
      <Respuesta []>[{id:1,texto:"Raja de tu falda"},{id:1,texto:"Paseo"},{id:1,texto:"Como camarón"},{id:1,texto:"Lunes"}]
  },
  {id:2,propietario_id : 1,titulo:"Música",texto:"¿Cual es la canción más famosa de La oreja de van gogh?",respuestas:
      <Respuesta []>[{id:1,texto:"Cuentame"},{id:1,texto:"La playa"},{id:1,texto:"Jueves"},{id:1,texto:"Rosas"}]
  },

];

