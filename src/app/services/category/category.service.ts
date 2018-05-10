import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {categoryModel} from '../../models/category/category.model'


@Injectable()
export class CategoryService {

  url = 'http://localhost:3000/category';

  constructor(private http: Http) { }

  getList(): Observable<categoryModel[]> {
      return this.http.get(this.url)
          .map((res: Response) => res.json() as categoryModel[])
          .catch((error: any) => Observable.throw(error));
  }
}
