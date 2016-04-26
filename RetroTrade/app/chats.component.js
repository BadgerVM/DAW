System.register(['angular2/core', './chats.service', './usuario.service'], function(exports_1, context_1) {
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
    var core_1, chats_service_1, usuario_service_1;
    var ChatsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (chats_service_1_1) {
                chats_service_1 = chats_service_1_1;
            },
            function (usuario_service_1_1) {
                usuario_service_1 = usuario_service_1_1;
            }],
        execute: function() {
            ChatsComponent = (function () {
                function ChatsComponent(MensajesService, UsuarioService) {
                    this.MensajesService = MensajesService;
                    this.UsuarioService = UsuarioService;
                }
                ChatsComponent.prototype.getMeId = function () {
                    var _this = this;
                    this.MensajesService.getMeId(1).then(function (mensajes1) { return _this.mensajes1 = mensajes1; });
                };
                ChatsComponent.prototype.getMeId2 = function () {
                    var _this = this;
                    this.MensajesService.getMeId2(2).then(function (mensajes) { return _this.mensajes = mensajes; });
                };
                ChatsComponent.prototype.getMensaje = function () {
                    var _this = this;
                    this.MensajesService.getMensaje().then(function (mensajes) { return _this.mensajes = mensajes; });
                };
                ChatsComponent.prototype.getMeId3 = function () {
                    var _this = this;
                    this.MensajesService.getMeId3(12).then(function (mensajes1) { return _this.mensajes1 = mensajes1; });
                };
                ChatsComponent.prototype.getUsuario = function () {
                    var _this = this;
                    this.UsuarioService.getUsuario(2).then(function (user) { return _this.user = user; });
                };
                ChatsComponent.prototype.getMeFilt = function () {
                    var _this = this;
                    this.MensajesService.getMeFilt(1, 1).then(function (mensajes) { return _this.mensajes = mensajes; });
                };
                ChatsComponent.prototype.ngOnInit = function () {
                    this.getMeFilt();
                    this.getUsuario();
                };
                ChatsComponent = __decorate([
                    core_1.Component({
                        selector: 'chats',
                        template: "\n  <div class=\"container well\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n           <h3 class=\"panel-title\" >Chats</h3>\n        </div>\n            <div class=\"panel-body\">\n                 <div class=\"col-sm-12\">\n                      <div class=\" col-sm-12\">\n                         <table class=\"table\">\n                           <tbody>\n                               <tr id=\"chatPersonal\" *ngFor=\"#mensa of mensajes\">\n\n                                   <td id=\"Persona\" *ngFor=\"#usuario of user\">{{usuario.nombre}}</td>\n                                   <td id=\"mensaje\" class=\"text-muted\">{{mensa.mensa}}</td>\n\n                               </tr>\n\n                           </tbody>\n                       </table>\n                     </div>\n\n                </div>\n           </div>\n      </div>\n  </div>\n   ",
                        providers: [chats_service_1.MensajesService, usuario_service_1.UsuarioService]
                    }), 
                    __metadata('design:paramtypes', [chats_service_1.MensajesService, usuario_service_1.UsuarioService])
                ], ChatsComponent);
                return ChatsComponent;
            }());
            exports_1("ChatsComponent", ChatsComponent);
        }
    }
});
//# sourceMappingURL=chats.component.js.map