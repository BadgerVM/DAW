import {Injectable} from 'angular2/core';
import {usuario} from './class';
import {USUARIOS} from './mock-usuarios';

@Injectable()
export class UsuarioService {
  getUsuario(id:number) {
    return Promise.resolve(USUARIOS).then( list => list.filter(usuario => usuario.id==id) );
  }
}
