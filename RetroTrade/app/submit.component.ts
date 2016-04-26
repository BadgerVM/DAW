import {Component,OnInit} from 'angular2/core';

@Component({
  selector: 'submit',
  template: `
    <div class="container well">
            <form class="form-horizontal">
                <fieldset>

                <div class="form-group">
                  <label class="col-md-4 control-label" for="Foto">Foto</label>
                  <div class="col-md-4">
                    <input id="Foto" name="Foto" class="input-file" type="file">
                  </div>
                </div>

                <!-- Text input-->
                <div class="form-group">
                  <label class="col-md-4 control-label" for="Nombre">Título</label>
                  <div class="col-md-4">
                  <input id="Nombre" name="Nombre" type="text" placeholder="Título" class="form-control input-md" required="">
                  <span class="help-block">Nombre del juego</span>
                  </div>
                </div>
                <!-- Button Drop Down -->
                <div class="form-group">
                  <label class="col-md-4 control-label" for="Consola">Consola</label>
                  <div class="col-md-4">
                    <div class="input-group">
                      <input id="Consola" name="Consola" class="form-control" placeholder="Consola" type="text" required="">
                      <div class="input-group-btn">
                        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                          Desplegar
                          <span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu pull-right">
                          <li><a href="#">NES</a></li>
                          <li><a href="#">SNES</a></li>
                          <li><a href="#">GameCube</a></li>
                          <li><a href="#">PS1</a></li>
                          <li><a href="#">Dreamcast</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Multiple Radios (inline) -->
                <div class="form-group">
                  <label class="col-md-4 control-label" for="Estado">Estado</label>
                  <div class="col-md-4">
                    <label class="radio-inline" for="Estado-0">
                      <input type="radio" name="Estado" id="Estado-0" value="1" checked="checked">
                      1
                    </label>
                    <label class="radio-inline" for="Estado-1">
                      <input type="radio" name="Estado" id="Estado-1" value="2">
                      2
                    </label>
                    <label class="radio-inline" for="Estado-2">
                      <input type="radio" name="Estado" id="Estado-2" value="3">
                      3
                    </label>
                    <label class="radio-inline" for="Estado-3">
                      <input type="radio" name="Estado" id="Estado-3" value="4">
                      4
                    </label>
                    <label class="radio-inline" for="Estado-4">
                      <input type="radio" name="Estado" id="Estado-4" value="5">
                      5
                    </label>
                  </div>
                </div>

                <!-- Text input-->
                <div class="form-group">
                  <label class="col-md-4 control-label" for="Precio">Precio:</label>
                  <div class="col-md-4">
                  <input id="Precio" name="Precio" type="text" placeholder="20€, 30€..." class="form-control input-md" required="">
                  <span class="help-block">El precio estimado se mostrará al lado del producto</span>
                  </div>
                </div>

                <!-- Textarea -->
                <div class="form-group">
                  <label class="col-md-4 control-label" for="Estado">Descripción</label>
                  <div class="col-md-4">
                    <textarea class="form-control" id="Estado" name="Estado">Precintado, pequeños roces, sin manual...</textarea>
                  </div>
                </div>

                <!-- Multiple Radios -->
                <div class="form-group">
                  <label class="col-md-4 control-label" for="Envío">¿Realizas envíos?</label>
                  <div class="col-md-4">
                  <div class="radio">
                    <label for="Envío-0">
                      <input type="radio" name="Envío" id="Envío-0" value="1" checked="checked">
                      Si
                    </label>
                    </div>
                  <div class="radio">
                    <label for="Envío-1">
                      <input type="radio" name="Envío" id="Envío-1" value="2">
                      No
                    </label>
                    </div>
                  </div>
                </div>

                <!-- Button -->
                <div class="form-group">
                  <label class="col-md-4 control-label" for="Enviar">¿Todo correcto?</label>
                  <div class="col-md-4">
                    <button id="Enviar" name="Enviar" class="btn btn-success">subir</button>
                  </div>
                </div>

            </fieldset>
        </form>
    </div>
   `,

})

  export class SubmitComponent{
  }
