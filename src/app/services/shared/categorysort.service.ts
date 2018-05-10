import { Injectable } from '@angular/core';

@Injectable()
export class CategorysortService {

  constructor() { }
  category:string;
  public setCategory(a:string):void{
    this.category=a;
  }
}
