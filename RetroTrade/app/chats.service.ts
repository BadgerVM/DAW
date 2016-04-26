import {Injectable} from 'angular2/core';

import {mensa} from './class';
import {MENSAJES} from './mock-mensajes';
import {MENSAJESPRIV} from './mock-mensajes';

@Injectable()
export class MensajesService {
  getMensaje() {
    return Promise.resolve(MENSAJES);
  }

  getMeId(id:number) {
    return Promise.resolve(MENSAJES).then( list => list.filter(mensa => mensa.id==id) );
  }

  getMeId2(id2:number) {
    return Promise.resolve(MENSAJES).then( list => list.filter(mensa => mensa.id2==id2) );
  }

  getMeId3(id3:number) {
    return Promise.resolve(MENSAJESPRIV).then( list => list.filter(mensa => mensa.id3==id3) );
  }

  getMeFilt(id:number, id2:number) {
  return Promise.resolve(MENSAJES).then(
    mensa => mensa.filter(mensa => mensa.id == id || mensa.id2 == id2 )  );
  }
}
