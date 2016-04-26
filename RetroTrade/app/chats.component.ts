import {Component, Input, OnInit} from 'angular2/core';
import {mensa,usuario} from './class';
import {MensajesService} from './chats.service';
import {UsuarioService} from './usuario.service';

@Component({
  selector: 'chats',
  template: `
  <div class="container well">
      <div class="panel panel-default">
        <div class="panel-heading">
           <h3 class="panel-title" >Chats</h3>
        </div>
            <div class="panel-body">
                 <div class="col-sm-12">
                      <div class=" col-sm-12">
                         <table class="table">
                           <tbody>
                               <tr id="chatPersonal" *ngFor="#mensa of mensajes">

                                   <td id="Persona" *ngFor="#usuario of user">{{usuario.nombre}}</td>
                                   <td id="mensaje" class="text-muted">{{mensa.mensa}}</td>

                               </tr>

                           </tbody>
                       </table>
                     </div>

                </div>
           </div>
      </div>
  </div>
   `,

   providers: [MensajesService,UsuarioService]
})

  export class ChatsComponent implements OnInit{
      constructor ( private MensajesService:MensajesService, private UsuarioService:UsuarioService){}
      mensajes: mensa[];
      mensajes1: mensa[];
      user: usuario[];
      getMeId(){
          this.MensajesService.getMeId(1).then(mensajes1 => this.mensajes1= mensajes1)
      }

      getMeId2(){
          this.MensajesService.getMeId2(2).then(mensajes => this.mensajes= mensajes)
      }

      getMensaje(){
          this.MensajesService.getMensaje().then(mensajes => this.mensajes= mensajes)
      }

      getMeId3(){
          this.MensajesService.getMeId3(12).then(mensajes1 => this.mensajes1= mensajes1)
      }

      getUsuario(){
          this.UsuarioService.getUsuario(2).then(user => this.user = user);
      }

      getMeFilt(){
          this.MensajesService.getMeFilt(1,1).then(mensajes => this.mensajes = mensajes);
      }

      ngOnInit (){
          this.getMeFilt()
          this.getUsuario()

      }
}
