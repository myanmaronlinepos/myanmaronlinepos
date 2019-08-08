import { Pipe, PipeTransform } from '@angular/core';
import { DataSource } from '@angular/cdk/table';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {

  transform(category: any[], searchText: string): any[] {
    if(!category) return [];
    if(!searchText) return category;
    
    searchText = searchText.toLowerCase();
        return category.filter( it => {
          return it.category_name.toLowerCase().includes(searchText);
        });
   } 

}
