import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../../services/category/category.service';
import { categoryModel } from '../../models/category/category.model';
import {Observable} from 'rxjs/';
import { CategorysortService } from '../../services/shared/categorysort.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Categories:Observable<categoryModel[]>;

  constructor(private CategoryService: CategoryService,private categorysort: CategorysortService ) {

   }

  ngOnInit() {
    this.CategoryService.getList().subscribe((response : categoryModel[])=> 
    {
      this.Categories= Observable.of(response);
    });
    console.log(this.Categories);
  }


}
