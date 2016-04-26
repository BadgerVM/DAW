import {Injectable} from 'angular2/core';

import {product} from './class';
import {PROLIST} from './mock-productos';

@Injectable()
export class ProductService {
  getProducto() {
    return Promise.resolve(PROLIST);
  }

  getProductoId(id:number) {
    return Promise.resolve(PROLIST).then( list => list.filter(product => product.id==id) );
  }
  getProductoIdU(idU:number) {
    return Promise.resolve(PROLIST).then( list => list.filter(product => product.idU==idU) );
  }
}
