import {Component} from 'angular2/core';

@Component({
  selector: 'footer',
  template: `
  <a class="saldoFoot" id="saldFootr">
      Saldo actual: <script type="text/javascript">
          document.writeln(saldo); </script>
   </a>
   `,
})

  export class FooterComponent{}
