import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';
import { Observable } from 'rxjs/';
import { productsModel } from '../../models/products/products.model';
import { LocalStorageService, LocalStorage } from 'ngx-webstorage';
import { CategorysortService } from '../../services/shared/categorysort.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Observable<productsModel[]>;
  p: number = 1;
  productInfo: Observable<any>;
  constructor(private productsService: ProductsService, private localSt: LocalStorageService, private categorysort: CategorysortService,
    private toastr: ToastrService, private modalService: NgbModal) {
  }
  ngOnInit() {
    this.productsService.getList().subscribe((response: productsModel[]) => {
      this.products = Observable.of(response);
    });

  }
  putProduct(product): any {
    let a: Array<productsModel>;
    a = JSON.parse(this.localSt.retrieve('cart')) || [];
    product.quantity = 0;
    let check = false;

    for (let i = 0; i < a.length; i++) {
      if (a[i].id == product.id) {
        a[i].quantity = +a[i].quantity + 1;
        check = true;
      }
    }

    if (!check) {
      product.quantity = 1;
      a.push(product);
    }
    this.localSt.store('cart', JSON.stringify(a));
    this.toastr.success(product.name + ' pridėtas į krepšelį');
  }
  open(modal, productIndex, property) {
    //TODO
    this.modalService.open(modal);
    this.productInfo = this.products.map(arr => arr[productIndex].image);
  }
}

