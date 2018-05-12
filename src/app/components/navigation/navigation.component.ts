import { Component, OnInit } from '@angular/core';
import { productsModel } from '../../models/products/products.model';
import { CartserviceService } from '../../services/Cart/cartservice.service';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  products: Observable<productsModel[]>;
  constructor() { }

  ngOnInit() {
  }
}
