import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';
import {Observable} from 'rxjs/';
import { productsModel } from '../../models/products/products.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    products: Observable<productsModel[]>;
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getList().subscribe((response : productsModel[])=> 
    {
      console.log(response);
      this.products= Observable.of(response);
    });
   
  }

}
