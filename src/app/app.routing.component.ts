import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { employeeComponent } from './Components/employees/employees.compontent';
import { InventoryComponent } from './inventory/inventory.component';


const routes: Routes = [
    { path: 'employees', component: employeeComponent },
    { path: 'Inventory', component: InventoryComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class appRoutingModule { }
