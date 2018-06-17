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
    product.Quantity = 0;
    let check = false;
    console.log(a);
    console.log(product);
    for (let i = 0; i < a.length; i++) {
      if (a[i].ID == product.ID) {
        a[i].Quantity = +a[i].Quantity + 1;
        check = true;
      }
    }

    if (!check) {
      product.Quantity = 1;
      a.push(product);
    }
    this.localSt.store('cart', JSON.stringify(a));
    this.toastr.success(product.Name + ' pridėtas į krepšelį');
  }
  open(modal, productIndex, property) {
    //TODO
    this.modalService.open(modal);
    this.productInfo = this.products.map(arr => arr[productIndex].Image);
  }
}

