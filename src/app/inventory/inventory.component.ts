import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../services/inventory/inventory.services';
import {Observable} from 'rxjs/';
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  
  inventory:Observable<any>;
  inventoryTypes:Observable<any>;
  title= 'Inventory Filter';
  filter:any;
  constructor(private inventoryService: InventoryService) { }

  ngOnInit() {
    this.inventoryService.getlist().subscribe((response : any)=> 
    {
      console.log(response);
      this.inventory= Observable.of(response);
    });
    this.inventoryService.getTypes().subscribe((response : any)=> 
    {
      console.log(response);
      this.inventoryTypes= Observable.of(response);
    });
  }
  setfilterEvent(id){
    this.filter =id;
    
  }

  filterList(id){
    if(id){
      return this.inventory.map(item => item.filter(x => x.type === id));
    }
    return this.inventory;
  }
}
