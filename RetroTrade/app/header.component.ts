import {Component, Input} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {SearchComponent} from './search.component';
import {PersonalesComponent} from './personales.component';
import {FooterComponent} from './footer.component';
import {DataComponent} from './data.component';
import {ChatsComponent} from './chats.component';
import {ChatComponent} from './ChatPriv.component';
import {SubmitComponent} from './submit.component';
import {IndexComponent} from './index.component'
import {PerfilComponent} from './perfil.component'

@Component({
  selector: 'header',
  template: `'<nav class="navbar navbar-default navbar-fixed-top" role="navigation" background-color='#d5d5d5'>
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse"
                    data-target=".navbar-ex1-collapse">
              <span class="sr-only">Desplegar navegación</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" [routerLink]="['Index']">RetroTrade</a>
          </div>

          <div class="collapse navbar-collapse navbar-ex1-collapse">
            <ul class="nav navbar-nav">

              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown"> Opciones <b class="caret"></b>
                </a>
                <ul class="dropdown-menu">
                  <li><a  [routerLink]="['Personales']">Datos personales</a></li>
                  <li><a href="cartera.html">Cartera</a> </li>
                  <li><a [routerLink]="['Perfil'] ">Perfil</a></li>
                  <li class="divider"></li>
                  <li><a href="#">Contactanos</a></li>
                  <li class="divider"></li>
                  <li><a href="#">Logout</a></li>
                </ul>
              </li>
            </ul>

            <form class="navbar-form navbar-left" role="search">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Buscar">
              </div>
              <a [routerLink]="['Busq']"> <button type="button" class="btn btn-default"> <img src="buscar.png"> </button> </a>
            </form>

            <ul class="nav navbar-nav navbar-right">
              <li><a [routerLink]="['Chats']"><img src="chat.png" ></a></li>
              <li><a [routerLink]="['Submit']"><img src="subir.png"></a></li>
            </ul>
          </div>
        </nav>
        <br/><br/>
        <br/><br/>
        <router-outlet></router-outlet>
        `,

        directives: [ROUTER_DIRECTIVES, SearchComponent, HeaderComponent, FooterComponent,
          PersonalesComponent, DataComponent, ChatsComponent, ChatComponent,
          SubmitComponent, IndexComponent, PerfilComponent],

        providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
  {
  path: '/DatosPersonales',
  name: 'Personales',
  component: PersonalesComponent
},
{
  path: '/Busq',
  name: 'Busq',
  component: SearchComponent
},
{
    path: '/perfil',
    name: 'Perfil',
    component: PerfilComponent
},
{
    path: '/Submit',
    name: 'Submit',
    component: SubmitComponent
},

{
    path: '/Chats',
    name: 'Chats',
    component: ChatsComponent
},

  {
      path: '/Index',
      name: 'Index',
      component: IndexComponent,
      useAsDefault: true
  }


])

    export class HeaderComponent{

}
