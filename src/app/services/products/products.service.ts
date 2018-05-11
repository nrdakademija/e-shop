import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { productsModel } from '../../models/products/products.model';

@Injectable()
export class ProductsService {
  url = 'http://localhost:53152/products';

  constructor(private http: Http) { }

  getList(): Observable<productsModel[]> {
    return this.http.get(this.url)
      .map((res: Response) => res.json() as productsModel[])
      .catch((error: any) => Observable.throw(error));
  }

}
