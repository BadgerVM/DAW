System.register(['angular2/core', './product.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, product_service_1;
    var DataComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            }],
        execute: function() {
            DataComponent = (function () {
                function DataComponent(ProductoService) {
                    this.ProductoService = ProductoService;
                }
                DataComponent.prototype.getProducto = function () {
                    var _this = this;
                    this.ProductoService.getProductoId(2).then(function (product) { return _this.productos = product; });
                };
                DataComponent.prototype.ngOnInit = function () {
                    this.getProducto();
                };
                DataComponent = __decorate([
                    core_1.Component({
                        selector: 'data',
                        template: "\n    <div class=\"container well\" *ngFor=\"#product of productos\">\n    <div class=\"panel panel-info\">\n        <div class=\"panel-heading\">\n           <h3 class=\"panel-title\" id=\"product\">{{product.nombrePro}}</h3>\n        </div>\n            <div class=\"panel-body\">\n               <div class=\"row\">\n                 <div class=\"col-sm-12\">\n\n                      <img class=\"img-rounded\" id=\"fotoGra\" src=\"http://i.ebayimg.com/00/s/OTAwWDE2MDA=/z/ORoAAOSwHPlWgDDi/$_1.JPG\" >\n\n                      <div class=\" col-sm-12\">\n                         <table class=\"table\">\n                           <tbody>\n                               <tr>\n\n                                   <td id=\"info\"><button type=\"submit\" class=\"btn btn-success btn-block\">\u00A1Lo Quiero!</button></td>\n                                   <td id=\"info\"><button type=\"submit\" class=\"btn btn-primary btn-block\">Contraoferta</button></td>\n                                   <td id=\"info\"><button type=\"submit\" class=\"btn btn-info btn-block\">Chat</button></td>\n                                   <td id=\"info\"><button type=\"submit\" class=\"btn btn-danger btn-block\">Eliminar</button></td>\n\n                               </tr>\n                               <tr>\n                                  <td id=\"info\">{{product.precio}}\u20AC</td>\n                                   <td id=\"info\">Estado {{product.estado}}/10</td>\n                                   <td id=\"info\">Env\u00EDo: {{product.envio}}</td>\n                                   <td id=\"info\">{{product.loca}}</td>\n\n                               </tr>\n                           </tbody>\n                       </table>\n                     </div>\n                 </div>\n                </div>\n                <div class=\"col-xs-12 col-md-12\" style=\"background-color:#fff\" >Pok\u00E9mon Amarillo completo, tal y como se puede apreciar en la imagen, comprado hace m\u00E1s de 15 a\u00F1os, contactar conmigo para m\u00E1s detalles :).</div>\n           </div>\n     </div>\n\n   ",
                        providers: [product_service_1.ProductService]
                    }), 
                    __metadata('design:paramtypes', [product_service_1.ProductService])
                ], DataComponent);
                return DataComponent;
            }());
            exports_1("DataComponent", DataComponent);
        }
    }
});
//# sourceMappingURL=data.component.js.map