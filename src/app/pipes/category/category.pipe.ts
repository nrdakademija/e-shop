import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(items: Observable<any>, typeFilter: any): any {
    if (items == null) {
        return [];
    }

    if (typeFilter && typeFilter!="none") {
        return items.filter(i => i.category === typeFilter);
    }

    return items;
}

}
