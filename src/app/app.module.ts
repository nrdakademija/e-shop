import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, FormBuilder } from '@angular/forms'

import { Ng2Webstorage } from 'ngx-webstorage';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app.routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsService } from './services/products/products.service';
import { HttpModule } from '@angular/http';
import { RegistrationComponent } from './components/registration/registration.component';
import { AngularcliStarRatingModule } from 'angularcli-star-rating';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CartComponent } from './components/cart/cart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CartserviceService } from './services/Cart/cartservice.service';
import { HistoryComponent } from './components/history/history.component';
import { CategoryService } from './services/category/category.service';
import { CategoryPipe } from './pipes/category/category.pipe';
import { CategorysortService } from './services/shared/categorysort.service';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    LoginComponent,
    ProductComponent,
    RegistrationComponent,
    CartComponent,
    HistoryComponent,
    CategoryPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    Ng2Webstorage,
    FormsModule,
    AngularcliStarRatingModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      maxOpened: 3,
      autoDismiss: true,
    }),
    NgxPaginationModule,
    NgbModule.forRoot(),
  ],

  providers: [ProductsService, CartserviceService, CategoryService, CategorysortService],
  bootstrap: [AppComponent]
})
export class AppModule { }
