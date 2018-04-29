import { Component, OnInit } from '@angular/core';
import { productsModel } from '../../models/products/products.model';
import { LocalStorageService } from 'ngx-webstorage';
import { CartserviceService } from '../../services/Cart/cartservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']

})
export class CartComponent implements OnInit {

  constructor(private localSt:LocalStorageService,private prod:CartserviceService) { }

  products:Array<productsModel>;
  price:Number=0;

  ngOnInit() {
   this.products= this.prod.GetProduct();
   this.price= this.prod.countPrice();
  }
  delete(prod:productsModel){
    this.prod.removeProduct(prod);
    this.products= this.prod.GetProduct();
  }
}
