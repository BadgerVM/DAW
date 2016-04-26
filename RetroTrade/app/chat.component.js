System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var ChatsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ChatsComponent = (function () {
                function ChatsComponent() {
                }
                ChatsComponent = __decorate([
                    core_1.Component({
                        selector: 'Chats',
                        template: "\n  <div class=\"container well\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n           <h3 class=\"panel-title\" >Chats</h3>\n        </div>\n            <div class=\"panel-body\">\n\n                 <div class=\"col-sm-12\">\n\n\n\n                      <div class=\" col-sm-12\">\n                         <table class=\"table\">\n                           <tbody>\n                               <tr id=\"chatPersonal\" onclick=\"document.location.href = 'ChatPersonal.html';\">\n                                   <td id=\"Persona\">Carlos</td>\n                                   <td id=\"mensaje\" class=\"text-muted\">Hola buenas</td>\n                               </tr>\n                                <tr id=\"chatPersonal\">\n                                  <td id=\"Persona\">Javier</td>\n                                   <td id=\"mensaje\" class=\"text-muted\">\u00BFSigues interesado? </td>\n\n                               </tr>\n                           </tbody>\n                       </table>\n                     </div>\n\n                </div>\n           </div>\n      </div>\n\n  </div>\n   ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], ChatsComponent);
                return ChatsComponent;
            }());
            exports_1("ChatsComponent", ChatsComponent);
        }
    }
});
//# sourceMappingURL=chat.component.js.map