import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'inventory-list-filter-button',
    template: `
    <h3>{{filterTitle}}</h3>
    <button class="btn btn-primary" (click)="setFilter(4)">Computer</button>
    <button class="btn btn-primary" (click)="setFilter(2)">Keyboard</button>
    <button class="btn btn-primary" (click)="setFilter(3)">Mouse</button>
    <button class="btn btn-primary" (click)="setFilter(1)">Monitor</button>  
    `
})

export class inventoryListFilterButtonsComponent implements OnInit {
    @Output ()filterEvent: EventEmitter<any> = new EventEmitter<any>();
    @Input() filterTitle ="Default Title";
    constructor() { }

    ngOnInit() { }
    setFilter(id){
        this.filterEvent.emit(id);
    }
}