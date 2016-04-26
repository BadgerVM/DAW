import {Component, Input, OnInit} from 'angular2/core';
import {product} from './class';
import {ProductService} from './product.service';



@Component({
  selector: 'search',
  template: `<br/><br/><br/>
      <div class="container well">
    	     <div *ngFor="#product of productos" class="panel panel-default">
           <div class="panel-heading">
             <h3 class="panel-title" id="product">{{product.nombrePro}}</h3>
           </div>
           <div class="panel-body">
           <div class=" col-sm-5">
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
                         <td id="info">Estado {{product.estado}}/10</td>
                         <td id="info"><button type="submit" class="btn  btn-block">Contraoferta</button></td>
                     </tr>
                     <tr>
                         <td id="info">Envío: {{product.envio}}</td>
                         <td id="info"><button type="submit" class="btn btn-block">Chat</button></td>
                     </tr>
                     <tr>
                         <td id="info">{{product.loca}}</td>
                        <td id="info" class="nostyle"><a href="producto.html" class="nostyle"><button type="button" class="btn  btn-block" href="producto.html">Datos</button></a></td>
                     </tr>
                 </tbody>
             </table>
           </div>
       </div>
          </div>
      </div>`,
      providers: [ProductService]
})

    export class SearchComponent implements OnInit{
      constructor ( private ProductoService:ProductService){}
      productos: product[];
      getProducto(){
          this.ProductoService.getProducto().then(productos => this.productos= productos)
      }
      ngOnInit (){
          this.getProducto()
      }


}
