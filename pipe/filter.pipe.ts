import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, serchTerm): any {
    if(value.length == 0 || serchTerm == '') {
      return value
    }
   return value.filter((item)=> item.Name.toLowerCase().indexOf(serchTerm.toLowerCase()) > -1)
  }
}