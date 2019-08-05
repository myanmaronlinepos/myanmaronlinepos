import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(assignproducts:[] , filteredValue: string): [] {
    if(!assignproducts || !filteredValue) {
      return assignproducts;
    } 
  }

}
