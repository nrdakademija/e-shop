import { Component, OnInit } from '@angular/core';
import { productsModel } from '../../models/products/products.model';
import { LocalStorageService } from 'ngx-webstorage';
import { CartserviceService } from '../../services/Cart/cartservice.service';
import {Transactions} from '../../models/products/transaction.model'
declare let paypal: any;
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
    this.prod.countPrice();
  }
  
  addScript: boolean = false;
  paypalLoad: boolean = true;
  
  finalAmount: number = 1;

  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'AYsqcoNw1jVgJ7FIdL2pDfyTdSJPZuRQvs3DKftkjV0ajogWld-sK7jhca7InPdcs5Ws6nHCKGbmzgjH',
      production: ''
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.prod.countPrice(), currency: 'USD' } }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        //Do something when payment is successful.
        var a  = new Transactions;
        a.payment=payment;
        a.products=this.prod.GetProduct();
        this.prod.postPayment(a).subscribe();
        this.localSt.clear();
        this.products= new Array<productsModel>();
        this.prod.countPrice();
      })
    }
  };

  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
        this.paypalLoad = false;
      })
    }
  }
  
  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = document.createElement('script');    
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    })
  }
}
