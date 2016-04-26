import {Component,OnInit} from 'angular2/core';

@Component({
  selector: 'index',
  template: `
  <div class="container">
        <div class="page" id="banner">
            <div class="row">
                <div class="row">

                        <div class="page-header">
                            <center><h1 id="forms">BIENVENIDOS A RETRO TRADE</h1></center>

                            <hr style="color: #ACB5FF; margin-bottom:0px; margin-top:0px;" />

                            <div class="container">
                              <div class="container" id="centrado">


                                  <ul class="list-inline" id="tam_menu">
                                    <li><a href="#" id="centrado">Novedades </a></li>
                                    <li><a href="#" id="centrado">Cerca de ti</a></li>
                                    <li><a href="#" id="centrado">Ediciones Limitadas</a></li>
                                    <li><a href="#" id="centrado">Material Retro</a></li>
                                  </ul>
                              </div>
                            </div>
                            <hr style="color: #ACB5FF; margin-bottom:0px; margin-top:-10px;" />

                        </div>

                    </div>
                    <div>
                       <div class="col-sm-12">
                          <center><h3 id="forms">Si aún no eres usuario</h3>
                          <a  href="DatosPers.html" type="button" class="btn btn-primary" background-color="#b2b9c0">REGISTRARSE AQUI</a></center>
                      </div>
                    </div>

                <div class="col-sm-12">
                      <div class="col-lg-12">
                        <div class="page-header">
                          <h3 id="forms">Artículos destacados</h3>
                        </div>
                      </div>
                    <!--fotos carrusel-->
                    <div class="container galeria_index">
                        <div class="col-xs-12 col-sm-8" >
                            <div class="row">
                                <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                                  <!-- Indicators -->
                                  <ol class="carousel-indicators">
                                    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                                    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                                    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                                  </ol>

                                  <!-- Wrapper for slides -->
                                  <div class="carousel-inner">
                                    <div class="item active">
                                      <img src="http://static.zerochan.net/Hatsune.Miku.full.1946377.jpg" alt="...">
                                      <div class="carousel-caption">
                                          <h3>Caption Text</h3>
                                      </div>
                                    </div>
                                    <div class="item">
                                      <img src="http://static.zerochan.net/Hatsune.Miku.full.1946377.jpg" alt="...">
                                      <div class="carousel-caption">
                                          <h3>Caption Text</h3>
                                      </div>
                                    </div>
                                    <div class="item">
                                      <img src="http://static.zerochan.net/Hatsune.Miku.full.1946377.jpg" alt="...">
                                      <div class="carousel-caption">
                                          <h3>Caption Text</h3>
                                      </div>
                                    </div>
                                  </div>

                                  <!-- Controls -->
                                  <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                                    <span class="glyphicon glyphicon-chevron-left"></span>
                                  </a>
                                  <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                                    <span class="glyphicon glyphicon-chevron-right"></span>
                                  </a>
                                </div> <!-- Carousel -->
                            </div>
                        </div>

                        <div class="col-xs-6 col-sm-4" >
                            <img class="img_index" src="https://img.donanimhaber.com/upfiles/881131/6F6CCA13FB414390A430D401EF2B9E01.jpg" >
                        </div>

                        <div class="col-xs-6 col-sm-4" >

                            <img class="img_index" src="https://img.donanimhaber.com/upfiles/881131/6F6CCA13FB414390A430D401EF2B9E01.jpg">

                        </div>

                    </div>
                </div>


            </div>
        </div>
    </div>

   `,

})

  export class IndexComponent{
  }
