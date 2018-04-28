import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';
import {Observable} from 'rxjs/';
import { productsModel } from '../../models/products/products.model';
import { LocalStorageService, LocalStorage } from 'ngx-webstorage';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    products: Observable<productsModel[]>;
  constructor(private productsService: ProductsService,private localSt:LocalStorageService) { }

  ngOnInit() {
    this.productsService.getList().subscribe((response : productsModel[])=> 
    {
      this.products= Observable.of(response);
    });
   
  }
  putProduct(product):any{
    let a:Array<productsModel>;
    a=JSON.parse(this.localSt.retrieve('cart')) || [];
    a.push(product);
    this.localSt.store('cart',JSON.stringify(a));
  }
  
}
