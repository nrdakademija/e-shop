import { Component, OnInit } from '@angular/core';
import { productsModel } from '../../models/products/products.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  products:Array<productsModel>;

  ngOnInit() {
  
  }

}
