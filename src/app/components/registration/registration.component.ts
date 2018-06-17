import { Component, OnInit } from '@angular/core';
import { RegistartionService } from '../../services/Registration/registartion.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private reg :RegistartionService) { }

  ngOnInit() {
  }

}
