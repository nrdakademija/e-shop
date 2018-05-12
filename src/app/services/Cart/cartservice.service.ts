import { Injectable } from '@angular/core';
import { productsModel } from '../../models/products/products.model';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Response } from '@angular/http';

@Injectable()
export class CartserviceService {

  products: productsModel[];
  cartItems: Observable<productsModel[]>;
  price: Number;
  url2 = 'http://localhost:3000/payments';
  constructor(private localSt: LocalStorageService, private http: Http) { }
  GetProduct() {
    this.products = JSON.parse(this.localSt.retrieve('cart')) || [];
    return this.products;
  }
  cartSize(): Observable<productsModel[]> {
    this.cartItems = JSON.parse(this.localSt.retrieve('cart')) || [];
    return this.cartItems;
  }
  countPrice() {
    this.price = 0;
    for (let a of this.products) {
      this.price = +this.price + +a.price * +a.quantity;
    }
    this.price = +this.price.toFixed(2);
    return this.price;
  }
  leaving(prod: productsModel[]) {
    this.localSt.clear();
    console.log(prod);
    this.localSt.store('cart', JSON.stringify(prod));
  }
  removeProduct(delte: productsModel) {
    this.products = this.products.filter(obj => obj !== delte);
    this.leaving(this.products);
  }
  postPayment(payment): Observable<any> {
    console.log(payment);
    return this.http.post(this.url2, payment)
      .map((res: Response) => res.json() as any)
      .catch((error: any) => Observable.throw(error));
  }
}
