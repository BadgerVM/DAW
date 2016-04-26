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
    var SearchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            }],
        execute: function() {
            SearchComponent = (function () {
                function SearchComponent(ProductoService) {
                    this.ProductoService = ProductoService;
                }
                SearchComponent.prototype.getProducto = function () {
                    var _this = this;
                    this.ProductoService.getProducto().then(function (productos) { return _this.productos = productos; });
                };
                SearchComponent.prototype.ngOnInit = function () {
                    this.getProducto();
                };
                SearchComponent = __decorate([
                    core_1.Component({
                        selector: 'search',
                        template: "<br/><br/><br/>\n      <div class=\"container well\">\n    \t     <div *ngFor=\"#product of productos\" class=\"panel panel-default\">\n           <div class=\"panel-heading\">\n             <h3 class=\"panel-title\" id=\"product\">{{product.nombrePro}}</h3>\n           </div>\n           <div class=\"panel-body\">\n           <div class=\" col-sm-5\">\n               <img id=\"fotPro\" class=\"img-rounded\" src=\"http://i.ebayimg.com/00/s/OTAwWDE2MDA=/z/ORoAAOSwHPlWgDDi/$_1.JPG\" >\n           </div>\n\n           <div class=\" col-sm-7\">\n               <table class=\"table\">\n                 <tbody>\n                     <tr>\n                         <td id=\"info\">{{product.precio}}\u20AC</td>\n                         <td id=\"info\"><button type=\"submit\" class=\"btn btn-block\">\u00A1Lo Quiero!</button></td>\n\n                     </tr>\n                     <tr>\n                         <td id=\"info\">Estado {{product.estado}}/10</td>\n                         <td id=\"info\"><button type=\"submit\" class=\"btn  btn-block\">Contraoferta</button></td>\n                     </tr>\n                     <tr>\n                         <td id=\"info\">Env\u00EDo: {{product.envio}}</td>\n                         <td id=\"info\"><button type=\"submit\" class=\"btn btn-block\">Chat</button></td>\n                     </tr>\n                     <tr>\n                         <td id=\"info\">{{product.loca}}</td>\n                        <td id=\"info\" class=\"nostyle\"><a href=\"producto.html\" class=\"nostyle\"><button type=\"button\" class=\"btn  btn-block\" href=\"producto.html\">Datos</button></a></td>\n                     </tr>\n                 </tbody>\n             </table>\n           </div>\n       </div>\n          </div>\n      </div>",
                        providers: [product_service_1.ProductService]
                    }), 
                    __metadata('design:paramtypes', [product_service_1.ProductService])
                ], SearchComponent);
                return SearchComponent;
            }());
            exports_1("SearchComponent", SearchComponent);
        }
    }
});
//# sourceMappingURL=search.component.js.map