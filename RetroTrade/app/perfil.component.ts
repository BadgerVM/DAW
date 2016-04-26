import {Component, Input, OnInit} from 'angular2/core';
import {mensa,usuario,product} from './class';
import {UsuarioService} from './usuario.service';
import {ProductService} from './product.service';



@Component({
  selector: 'perfil',
  template: `
  <div class="container well">
      <div class="google-map-canvas" id="map-canvas">

      </div>

                   <div class="profile-header-container" id="avat" *ngFor="#usuario of user1">
                       <div class="profile-header-img">
                           <img class="img-circle" src="//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120" />
                           <!-- badge -->
                           <div class="rank-label-container">
                               <span class="label label-default rank-label" >{{usuario.nombre}}</span>
                           </div>
                       </div>
                   </div>


      <div class="panel panel-default" *ngFor="#usuario of user1">
          <div class="container-fluid" id="valorac">
              <div class="col-lg-12">
                   <ul class="nav navbar-nav" id="estadisticas">
                     <li><a class="nostyle">Productos: {{usuario.productos}}</a></li>
                     <li><a href="#" class="nostyle">Valoraciones:{{usuario.valoraciones}}</a></li>
                     <li><a class="nostyle">Envíos realizados:{{usuario.envios}}</a></li>
                   </ul>
               </div>
           </div>
      </div>



         <div class="panel panel-default" *ngFor="#product of prolist">
             <div class="panel-heading">
               <h3 class="panel-title" id="product">{{product.nombrePro}}</h3>
             </div>
             <div class="panel-body">
             <div class=" col-sm-5 fotoproducto">
                 <img id="fotPro" class="img-rounded" src="http://i.ebayimg.com/00/s/OTAwWDE2MDA=/z/ORoAAOSwHPlWgDDi/$_1.JPG" >
             </div>

             <div class=" col-sm-7">
                 <table class="table">
                   <tbody>
                       <tr>
                           <td id="info">{{product.precio}}€</td>
                           <td id="info"><button type="submit" class="btn btn-block">¡Lo Quiero!</button></td>

                       </tr>
                       <tr>
                           <td id="info">Estado {{product.estado}}/5</td>
                           <td id="info"><button type="submit" class="btn btn-block">Contraoferta</button></td>
                       </tr>
                       <tr>
                           <td id="info">Envío: {{product.envio}}</td>
                           <td id="info"><button type="submit" class="btn btn-block">Chat</button></td>
                       </tr>
                       <tr>
                           <td id="info">{{product.loca}}</td>
                           <td id="info"><a href="producto.html"><button type="button" class="btn btn-block" href="producto.html">Datos</button></a></td>
                       </tr>
                   </tbody>
               </table>
             </div>
             </div>
           </div>
   </div>

   `,
   styleUrls:['styles.css'],
   providers: [UsuarioService, ProductService]
})



  export class PerfilComponent implements OnInit{
      constructor (private UsuarioService:UsuarioService, private ProductService:ProductService){}
      visible:boolean;
      prolist: product[];
      user1: usuario[];

      getUsuario(){
          this.UsuarioService.getUsuario(1).then(user1 =>{this.user1= user1;this.visible=true});
      }

      getProductoIdU(idU:number) {
        this.ProductService.getProductoIdU(1).then(prolist =>{this.prolist= prolist});
      }

      ngOnInit (){
          this.getUsuario()
          this.getProductoIdU(1)

      }
}
