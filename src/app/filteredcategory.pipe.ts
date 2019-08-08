import { Pipe, PipeTransform } from '@angular/core';
import { SellItem } from './share/models/SellItem';

@Pipe({
  name: 'filteredcategory',
  pure: false
})
export class FilteredcategoryPipe implements PipeTransform {

  transform(products: SellItem[], searchText: string): SellItem[] {
    if(!products) return [];
    if(!searchText) return products;
    
    searchText = searchText.toLowerCase();
        return products.filter( it => {
          return it.category.toLowerCase().includes(searchText);
        });
   } 
}
