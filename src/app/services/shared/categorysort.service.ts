import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CategorysortService {

  constructor() { }
  category: string;
  public setCategory(a: string): void {
    if (this.category != a) {
      this.category = a;
    }
    else {
      this.category = "none";
    }
  }
}
