import { Component, OnInit } from '@angular/core';
import { productsModel } from '../../models/products/products.model';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

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
