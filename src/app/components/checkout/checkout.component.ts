import { Component, OnInit } from '@angular/core';
import { productsModel } from '../../models/products/products.model';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private localSt:LocalStorageService) { }

  products:Array<productsModel>;
  price:Number=0;
  ngOnInit() {
    this.GetProduct();
    this.countPrice();
  }
  GetProduct(){
    this.products=JSON.parse(this.localSt.retrieve('cart')) || [];
  }
  countPrice(){
    this.price=0;
    for(let a of this.products){
      this.price=+this.price + +a.price*+a.quantity;
    }
    this.price=+this.price.toFixed(2);
  }
  leaving(){
    this.localSt.clear();
    this.localSt.store('cart',JSON.stringify(this.products));
  }
  removeProduct(delte:productsModel){
    this.products = this.products.filter(obj => obj !== delte );
    this.leaving();
  }
}