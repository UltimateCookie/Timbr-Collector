import { Pipe, PipeTransform } from '@angular/core';
import { Stamp } from 'src/app/stamp';
@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(items: Stamp[], idFilter: string, yearFilter: string, fiscalFilter: boolean, postalFilter: boolean, favFilter: boolean): any[] {

    if (items && items.length) {
      return items.filter(item => {
        if (idFilter && item.id.toString() !== idFilter) {
          return false;
        }

        if (yearFilter && item.year.toString() !== yearFilter) {
          return false;
        }

        if (fiscalFilter && item.fiscal != fiscalFilter) {
          return false;
        }

        if (postalFilter && item.postal != postalFilter) {
          return false;
        }

        if (favFilter && item.fav != favFilter) {
          return false;
        }

        return true;
      })
    };

    return items;
  }
}