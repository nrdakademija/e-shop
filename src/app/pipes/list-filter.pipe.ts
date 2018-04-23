import { Pipe, PipeTransform } from '@angular/core';

import{Observable} from 'rxjs/Observable';
@Pipe({
    name: 'listFilter'
})

export class listFilterPipe implements PipeTransform {
    transform(value: Observable<any>, filterId:any): any {
        if(value ===null){
            return [];
        }
        if(filterId){
            return value.filter(x=>x.type === filterId);
        }
        return value;
    }
}