import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing.component';
import { employeeComponent } from './Components/employees/employees.compontent';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryService } from './services/inventory/inventory.services';
import { HttpModule } from '@angular/http';
import { listFilterPipe } from './pipes/list-filter.pipe';
import { inventoryListFilterButtonsComponent } from './inventory-list-filter/inventory-list.filter.component';
import { employeeService } from './services/employees/employees.service';



@NgModule({
  declarations: [
    AppComponent,
    employeeComponent,
    InventoryComponent,
    listFilterPipe,
    inventoryListFilterButtonsComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    HttpModule,
  ],
  providers: [InventoryService,
    employeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
