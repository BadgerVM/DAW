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
    var ChatComponent;
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
            ChatComponent = (function () {
                function ChatComponent(MensajesService, UsuarioService) {
                    this.MensajesService = MensajesService;
                    this.UsuarioService = UsuarioService;
                    this.id = 1;
                }
                ChatComponent.prototype.getMeId = function () {
                    var _this = this;
                    this.MensajesService.getMeId(1).then(function (mensajes1) { return _this.mensajes1 = mensajes1; });
                };
                ChatComponent.prototype.getMeId2 = function () {
                    var _this = this;
                    this.MensajesService.getMeId2(2).then(function (mensajes) { return _this.mensajes = mensajes; });
                };
                ChatComponent.prototype.getMensaje = function () {
                    var _this = this;
                    this.MensajesService.getMensaje().then(function (mensajes) { return _this.mensajes = mensajes; });
                };
                ChatComponent.prototype.getMeId3 = function () {
                    var _this = this;
                    this.MensajesService.getMeId3(12).then(function (mensajes1) { return _this.mensajes1 = mensajes1; });
                };
                ChatComponent.prototype.getUsuario = function () {
                    var _this = this;
                    this.UsuarioService.getUsuario(1).then(function (user1) { return _this.user1 = user1; });
                };
                ChatComponent.prototype.getUsuario1 = function () {
                    var _this = this;
                    this.UsuarioService.getUsuario(2).then(function (user) { return _this.user = user; });
                };
                ChatComponent.prototype.getMeFilt = function () {
                    var _this = this;
                    this.MensajesService.getMeFilt(1, 1).then(function (mensajes) { return _this.mensajes = mensajes; });
                };
                ChatComponent.prototype.ngOnInit = function () {
                    this.getMeId3();
                    this.getUsuario();
                    this.getUsuario1();
                };
                ChatComponent = __decorate([
                    core_1.Component({
                        selector: 'chat',
                        template: "\n  <div class=\"container well\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n           <h3 class=\"panel-title\"  *ngFor=\"#usuario of user1\" >{{usuario.nombre}}</h3>\n        </div>\n            <div class=\"panel-body\">\n               <div class=\"panel panel-default\" *ngFor=\"#mensa of mensajes1\"  [class.enviado]=\"mensa.id===user1[0].id\" [class.recibido]=\"mensa.id!=user1[0].id\" >\n                 <div class=\"panel-body\" >\n                  {{mensa.mensa}}\n                 </div>\n               </div>\n           </div>\n      </div>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Campo de texto\">\n  </div>\n   ",
                        styleUrls: ['styles.css'],
                        providers: [chats_service_1.MensajesService, usuario_service_1.UsuarioService, chats_service_1.MensajesService]
                    }), 
                    __metadata('design:paramtypes', [chats_service_1.MensajesService, usuario_service_1.UsuarioService])
                ], ChatComponent);
                return ChatComponent;
            }());
            exports_1("ChatComponent", ChatComponent);
        }
    }
});
//# sourceMappingURL=ChatPriv.component.js.map