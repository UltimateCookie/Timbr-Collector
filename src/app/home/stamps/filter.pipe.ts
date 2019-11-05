import { Pipe, PipeTransform } from '@angular/core';
import { Stamp } from 'src/app/stamp';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: Stamp[], idFilter: string, yearFilter: string, fiscalFilter: boolean, postalFilter : boolean): any[] {
    
    
    if (items && items.length) {
      return items.filter(item =>{
        if (idFilter && item.id.toString() !== idFilter){
          return false;
        }
        
        if (yearFilter && item.year.toString() !== yearFilter){
          return false;
        }

        if (fiscalFilter && item.fiscal != fiscalFilter){
          return false;
        }

        if (postalFilter && item.postal != postalFilter){
          return false;
        }
      
        return true;
      }
      )};
    
    return items;
    
    //filter by ID
    if(idFilter) {
      idFilter = idFilter.toLowerCase();
      return items.filter( it => {
        return it.id.toString() === idFilter;
      });
    }

    //filter by year
    if(yearFilter) {
      yearFilter = yearFilter.toLowerCase();
      return items.filter( it => {
        return it.year.toString() === yearFilter;
      });
    }

    return items;
    // idFilter = idFilter.toLowerCase();
    //     return items.filter( it => {
    //       return it.picture.toLowerCase().includes(searchText);
    //     });
   } 
}
