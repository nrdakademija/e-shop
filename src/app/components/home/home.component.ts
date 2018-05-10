import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category/category.service';
import { categoryModel } from '../../models/category/category.model';
import {Observable} from 'rxjs/';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Categories:Observable<categoryModel[]>;
  constructor(private CategoryService: CategoryService ) {

   }

  ngOnInit() {
    this.CategoryService.getList().subscribe((response : categoryModel[])=> 
    {
      this.Categories= Observable.of(response);
    });
    console.log(this.Categories);
  }
  

}
