import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './employees.component.html'
})

export class employeeComponent implements OnInit {
    employees= [
        {
          "id": 1,
          "firstName": "Mindaugas",
          "inventory": [
            {
              "id": 4,
              "name": "Dell monitor"
            },
            {
              "id": 3,
              "name": "Logitech mouse"
            },
            {
              "id": 4,
              "name": "Dell computer"
            },
            {
              "id": 5,
              "name": "Logitech keyboard"
            }
          ]
        },
        {
          "id": 2,
          "firstName": "Kęstutis",
          "inventory": [
            {
              "id": 2,
              "name": "Asus monitor"
            },
            {
              "id": 3,
              "name": "Logitech mouse"
            },
            {
              "id": 4,
              "name": "Dell computer"
            }
          ]
        },
        {
          "id": 3,
          "firstName": "Linas",
          
        }
      ];
     
    constructor() { }

    ngOnInit() { }
}