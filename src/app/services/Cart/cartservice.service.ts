import { Injectable } from '@angular/core';
import { productsModel } from '../../models/products/products.model';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable()
export class CartserviceService {

  products:productsModel[];
  price: Number;
  constructor(private localSt:LocalStorageService) { }
  GetProduct(){
    this.products=JSON.parse(this.localSt.retrieve('cart')) || [];
    return this.products;
  }
  countPrice(){
    this.price=0;
    for(let a of this.products){
      this.price=+this.price + +a.price*+a.quantity;
    }
    this.price=+this.price.toFixed(2);
    return this.price;
  }
  leaving(prod:productsModel[]){
    this.localSt.clear();
    console.log(prod);
    this.localSt.store('cart',JSON.stringify(prod));
  }
  removeProduct(delte:productsModel){
    this.products = this.products.filter(obj => obj !== delte );
    this.leaving(this.products);
  }
}
