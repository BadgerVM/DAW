import {Component, Input, OnInit} from 'angular2/core';
import {mensa,usuario} from './class';
import {MensajesService} from './chats.service';
import {UsuarioService} from './usuario.service';


@Component({
  selector: 'chat',
  template: `
  <div class="container well">
      <div class="panel panel-default">
        <div class="panel-heading">
           <h3 class="panel-title"  *ngFor="#usuario of user1" >{{usuario.nombre}}</h3>
        </div>
            <div class="panel-body">
               <div class="panel panel-default" *ngFor="#mensa of mensajes1"  [class.enviado]="mensa.id===user1[0].id" [class.recibido]="mensa.id!=user1[0].id" >
                 <div class="panel-body" >
                  {{mensa.mensa}}
                 </div>
               </div>
           </div>
      </div>
      <input type="text" class="form-control" placeholder="Campo de texto">
  </div>
   `,
   styleUrls:['styles.css'],
   providers: [MensajesService,UsuarioService, MensajesService]
})

  export class ChatComponent implements OnInit{
      constructor ( private MensajesService:MensajesService, private UsuarioService:UsuarioService){}
      id: number =1;
      mensa:mensa;
      mensajes: mensa[];
      mensajes1: mensa[];
      user: usuario[];
      user1: usuario[];
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
          this.UsuarioService.getUsuario(1).then(user1 => this.user1 = user1);
      }
      getUsuario1(){
          this.UsuarioService.getUsuario(2).then(user => this.user = user);
      }

      getMeFilt(){
          this.MensajesService.getMeFilt(1,1).then(mensajes => this.mensajes = mensajes);
      }

      ngOnInit (){
          this.getMeId3()
          this.getUsuario()
          this.getUsuario1()

      }
}
