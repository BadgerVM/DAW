System.register(['angular2/core', './usuario.service', './product.service'], function(exports_1, context_1) {
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
    var core_1, usuario_service_1, product_service_1;
    var PerfilComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (usuario_service_1_1) {
                usuario_service_1 = usuario_service_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            }],
        execute: function() {
            PerfilComponent = (function () {
                function PerfilComponent(UsuarioService, ProductService) {
                    this.UsuarioService = UsuarioService;
                    this.ProductService = ProductService;
                }
                PerfilComponent.prototype.getUsuario = function () {
                    var _this = this;
                    this.UsuarioService.getUsuario(1).then(function (user1) { _this.user1 = user1; _this.visible = true; });
                };
                PerfilComponent.prototype.getProductoIdU = function (idU) {
                    var _this = this;
                    this.ProductService.getProductoIdU(1).then(function (prolist) { _this.prolist = prolist; });
                };
                PerfilComponent.prototype.ngOnInit = function () {
                    this.getUsuario();
                    this.getProductoIdU(1);
                };
                PerfilComponent = __decorate([
                    core_1.Component({
                        selector: 'perfil',
                        template: "\n  <div class=\"container well\">\n      <div class=\"google-map-canvas\" id=\"map-canvas\">\n\n      </div>\n\n                   <div class=\"profile-header-container\" id=\"avat\" *ngFor=\"#usuario of user1\">\n                       <div class=\"profile-header-img\">\n                           <img class=\"img-circle\" src=\"//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120\" />\n                           <!-- badge -->\n                           <div class=\"rank-label-container\">\n                               <span class=\"label label-default rank-label\" >{{usuario.nombre}}</span>\n                           </div>\n                       </div>\n                   </div>\n\n\n      <div class=\"panel panel-default\" *ngFor=\"#usuario of user1\">\n          <div class=\"container-fluid\" id=\"valorac\">\n              <div class=\"col-lg-12\">\n                   <ul class=\"nav navbar-nav\" id=\"estadisticas\">\n                     <li><a class=\"nostyle\">Productos: {{usuario.productos}}</a></li>\n                     <li><a href=\"#\" class=\"nostyle\">Valoraciones:{{usuario.valoraciones}}</a></li>\n                     <li><a class=\"nostyle\">Env\u00EDos realizados:{{usuario.envios}}</a></li>\n                   </ul>\n               </div>\n           </div>\n      </div>\n\n\n\n         <div class=\"panel panel-default\" *ngFor=\"#product of prolist\">\n             <div class=\"panel-heading\">\n               <h3 class=\"panel-title\" id=\"product\">{{product.nombrePro}}</h3>\n             </div>\n             <div class=\"panel-body\">\n             <div class=\" col-sm-5 fotoproducto\">\n                 <img id=\"fotPro\" class=\"img-rounded\" src=\"http://i.ebayimg.com/00/s/OTAwWDE2MDA=/z/ORoAAOSwHPlWgDDi/$_1.JPG\" >\n             </div>\n\n             <div class=\" col-sm-7\">\n                 <table class=\"table\">\n                   <tbody>\n                       <tr>\n                           <td id=\"info\">{{product.precio}}\u20AC</td>\n                           <td id=\"info\"><button type=\"submit\" class=\"btn btn-block\">\u00A1Lo Quiero!</button></td>\n\n                       </tr>\n                       <tr>\n                           <td id=\"info\">Estado {{product.estado}}/5</td>\n                           <td id=\"info\"><button type=\"submit\" class=\"btn btn-block\">Contraoferta</button></td>\n                       </tr>\n                       <tr>\n                           <td id=\"info\">Env\u00EDo: {{product.envio}}</td>\n                           <td id=\"info\"><button type=\"submit\" class=\"btn btn-block\">Chat</button></td>\n                       </tr>\n                       <tr>\n                           <td id=\"info\">{{product.loca}}</td>\n                           <td id=\"info\"><a href=\"producto.html\"><button type=\"button\" class=\"btn btn-block\" href=\"producto.html\">Datos</button></a></td>\n                       </tr>\n                   </tbody>\n               </table>\n             </div>\n             </div>\n           </div>\n   </div>\n\n   ",
                        styleUrls: ['styles.css'],
                        providers: [usuario_service_1.UsuarioService, product_service_1.ProductService]
                    }), 
                    __metadata('design:paramtypes', [usuario_service_1.UsuarioService, product_service_1.ProductService])
                ], PerfilComponent);
                return PerfilComponent;
            }());
            exports_1("PerfilComponent", PerfilComponent);
        }
    }
});
//# sourceMappingURL=perfil.component.js.map