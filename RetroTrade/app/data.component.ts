import {Component} from 'angular2/core';
import {product} from './class';
import {ProductService} from './product.service';


@Component({
    selector: 'data',
    template:`
    <div class="container well" *ngFor="#product of productos">
    <div class="panel panel-info">
        <div class="panel-heading">
           <h3 class="panel-title" id="product">{{product.nombrePro}}</h3>
        </div>
            <div class="panel-body">
               <div class="row">
                 <div class="col-sm-12">

                      <img class="img-rounded" id="fotoGra" src="http://i.ebayimg.com/00/s/OTAwWDE2MDA=/z/ORoAAOSwHPlWgDDi/$_1.JPG" >

                      <div class=" col-sm-12">
                         <table class="table">
                           <tbody>
                               <tr>

                                   <td id="info"><button type="submit" class="btn btn-success btn-block">¡Lo Quiero!</button></td>
                                   <td id="info"><button type="submit" class="btn btn-primary btn-block">Contraoferta</button></td>
                                   <td id="info"><button type="submit" class="btn btn-info btn-block">Chat</button></td>
                                   <td id="info"><button type="submit" class="btn btn-danger btn-block">Eliminar</button></td>

                               </tr>
                               <tr>
                                  <td id="info">{{product.precio}}€</td>
                                   <td id="info">Estado {{product.estado}}/10</td>
                                   <td id="info">Envío: {{product.envio}}</td>
                                   <td id="info">{{product.loca}}</td>

                               </tr>
                           </tbody>
                       </table>
                     </div>
                 </div>
                </div>
                <div class="col-xs-12 col-md-12" style="background-color:#fff" >Pokémon Amarillo completo, tal y como se puede apreciar en la imagen, comprado hace más de 15 años, contactar conmigo para más detalles :).</div>
           </div>
     </div>

   `,
providers: [ProductService]
})
export class DataComponent{

  constructor ( private ProductoService:ProductService){}
  productos: product[];
  getProducto(){
      this.ProductoService.getProductoId(2).then(product => this.productos= product)
    }
  ngOnInit (){
      this.getProducto()
  }

}
