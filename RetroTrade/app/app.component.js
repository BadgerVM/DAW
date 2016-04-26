System.register(['angular2/core', 'angular2/router', './header.component', './search.component', './personales.component', './footer.component', './data.component', './chats.component', './ChatPriv.component', './submit.component', './index.component', './perfil.component'], function(exports_1, context_1) {
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
    var core_1, router_1, header_component_1, search_component_1, personales_component_1, footer_component_1, data_component_1, chats_component_1, ChatPriv_component_1, submit_component_1, index_component_1, perfil_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (search_component_1_1) {
                search_component_1 = search_component_1_1;
            },
            function (personales_component_1_1) {
                personales_component_1 = personales_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (data_component_1_1) {
                data_component_1 = data_component_1_1;
            },
            function (chats_component_1_1) {
                chats_component_1 = chats_component_1_1;
            },
            function (ChatPriv_component_1_1) {
                ChatPriv_component_1 = ChatPriv_component_1_1;
            },
            function (submit_component_1_1) {
                submit_component_1 = submit_component_1_1;
            },
            function (index_component_1_1) {
                index_component_1 = index_component_1_1;
            },
            function (perfil_component_1_1) {
                perfil_component_1 = perfil_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        template: "<header> </header>\n    <br/><br/>\n\n\n\n\n    <footer></footer>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES, search_component_1.SearchComponent, header_component_1.HeaderComponent, footer_component_1.FooterComponent,
                            personales_component_1.PersonalesComponent, data_component_1.DataComponent, chats_component_1.ChatsComponent, ChatPriv_component_1.ChatComponent,
                            submit_component_1.SubmitComponent, index_component_1.IndexComponent, perfil_component_1.PerfilComponent],
                        providers: [router_1.ROUTER_PROVIDERS]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/DatosPersonales',
                            name: 'Personales',
                            component: personales_component_1.PersonalesComponent
                        },
                        {
                            path: '/perfil',
                            name: 'Perfil',
                            component: perfil_component_1.PerfilComponent
                        },
                        {
                            path: '/Busq',
                            name: 'Busq',
                            component: search_component_1.SearchComponent
                        },
                        {
                            path: '/Submit',
                            name: 'Submit',
                            component: submit_component_1.SubmitComponent
                        },
                        {
                            path: '/Chats',
                            name: 'Chats',
                            component: chats_component_1.ChatsComponent
                        },
                        {
                            path: '/Index',
                            name: 'Index',
                            component: index_component_1.IndexComponent,
                            useAsDefault: true
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map