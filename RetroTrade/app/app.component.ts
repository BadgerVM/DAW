import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {HeaderComponent} from './header.component';
import {product} from './class';
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
    selector: 'app',
    template:`<header> </header>
    <br/><br/>




    <footer></footer>
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
    path: '/perfil',
    name: 'Perfil',
    component: PerfilComponent
  },

  {
    path: '/Busq',
    name: 'Busq',
    component: SearchComponent
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

export class AppComponent {
     selectedPro: product;
}
