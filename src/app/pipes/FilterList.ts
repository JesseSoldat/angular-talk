import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filterList'})
export class FilterListPipe implements PipeTransform {
  transform(list: any[], filter: any):any {
    if(!list || !filter) {
      return list;
    }
    return list.filter(item => {
      return item.title.toLowerCase()
        .indexOf(filter.toLowerCase()) !== -1
    });
  }
}