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
    var IndexComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            IndexComponent = (function () {
                function IndexComponent() {
                }
                IndexComponent = __decorate([
                    core_1.Component({
                        selector: 'index',
                        template: "\n  <div class=\"container\">\n        <div class=\"page\" id=\"banner\">\n            <div class=\"row\">\n                <div class=\"row\">\n\n                        <div class=\"page-header\">\n                            <center><h1 id=\"forms\">BIENVENIDOS A RETRO TRADE</h1></center>\n\n                            <hr style=\"color: #ACB5FF; margin-bottom:0px; margin-top:0px;\" />\n\n                            <div class=\"container\">\n                              <div class=\"container\" id=\"centrado\">\n\n\n                                  <ul class=\"list-inline\" id=\"tam_menu\">\n                                    <li><a href=\"#\" id=\"centrado\">Novedades </a></li>\n                                    <li><a href=\"#\" id=\"centrado\">Cerca de ti</a></li>\n                                    <li><a href=\"#\" id=\"centrado\">Ediciones Limitadas</a></li>\n                                    <li><a href=\"#\" id=\"centrado\">Material Retro</a></li>\n                                  </ul>\n                              </div>\n                            </div>\n                            <hr style=\"color: #ACB5FF; margin-bottom:0px; margin-top:-10px;\" />\n\n                        </div>\n\n                    </div>\n                    <div>\n                       <div class=\"col-sm-12\">\n                          <center><h3 id=\"forms\">Si a\u00FAn no eres usuario</h3>\n                          <a  href=\"DatosPers.html\" type=\"button\" class=\"btn btn-primary\" background-color=\"#b2b9c0\">REGISTRARSE AQUI</a></center>\n                      </div>\n                    </div>\n\n                <div class=\"col-sm-12\">\n                      <div class=\"col-lg-12\">\n                        <div class=\"page-header\">\n                          <h3 id=\"forms\">Art\u00EDculos destacados</h3>\n                        </div>\n                      </div>\n                    <!--fotos carrusel-->\n                    <div class=\"container galeria_index\">\n                        <div class=\"col-xs-12 col-sm-8\" >\n                            <div class=\"row\">\n                                <div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\n                                  <!-- Indicators -->\n                                  <ol class=\"carousel-indicators\">\n                                    <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\n                                    <li data-target=\"#carousel-example-generic\" data-slide-to=\"1\"></li>\n                                    <li data-target=\"#carousel-example-generic\" data-slide-to=\"2\"></li>\n                                  </ol>\n\n                                  <!-- Wrapper for slides -->\n                                  <div class=\"carousel-inner\">\n                                    <div class=\"item active\">\n                                      <img src=\"http://static.zerochan.net/Hatsune.Miku.full.1946377.jpg\" alt=\"...\">\n                                      <div class=\"carousel-caption\">\n                                          <h3>Caption Text</h3>\n                                      </div>\n                                    </div>\n                                    <div class=\"item\">\n                                      <img src=\"http://static.zerochan.net/Hatsune.Miku.full.1946377.jpg\" alt=\"...\">\n                                      <div class=\"carousel-caption\">\n                                          <h3>Caption Text</h3>\n                                      </div>\n                                    </div>\n                                    <div class=\"item\">\n                                      <img src=\"http://static.zerochan.net/Hatsune.Miku.full.1946377.jpg\" alt=\"...\">\n                                      <div class=\"carousel-caption\">\n                                          <h3>Caption Text</h3>\n                                      </div>\n                                    </div>\n                                  </div>\n\n                                  <!-- Controls -->\n                                  <a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\n                                    <span class=\"glyphicon glyphicon-chevron-left\"></span>\n                                  </a>\n                                  <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">\n                                    <span class=\"glyphicon glyphicon-chevron-right\"></span>\n                                  </a>\n                                </div> <!-- Carousel -->\n                            </div>\n                        </div>\n\n                        <div class=\"col-xs-6 col-sm-4\" >\n                            <img class=\"img_index\" src=\"https://img.donanimhaber.com/upfiles/881131/6F6CCA13FB414390A430D401EF2B9E01.jpg\" >\n                        </div>\n\n                        <div class=\"col-xs-6 col-sm-4\" >\n\n                            <img class=\"img_index\" src=\"https://img.donanimhaber.com/upfiles/881131/6F6CCA13FB414390A430D401EF2B9E01.jpg\">\n\n                        </div>\n\n                    </div>\n                </div>\n\n\n            </div>\n        </div>\n    </div>\n\n   ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], IndexComponent);
                return IndexComponent;
            }());
            exports_1("IndexComponent", IndexComponent);
        }
    }
});
//# sourceMappingURL=index.component.js.map