import { Pipe, PipeTransform } from '@angular/core';
import { Stamp } from 'src/app/stamp';
import * as _ from 'lodash'; 
@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(items: Stamp[], countryFilter: string, yearFilter: string, fiscalFilter: boolean, postalFilter: boolean, favFilter: boolean): any[] {

    if (items && items.length) {
      return items.filter(item => {
        if (countryFilter && item.country.toString().toLowerCase() !== countryFilter.toLowerCase()) {
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


@Pipe({
  name: 'unique',
  pure: false
})
export class UniquePipe implements PipeTransform {
    transform(value: Stamp[]): any{
        if(value!== undefined && value!== null){
            return _.uniqBy(value, 'country');
        }
        return value;
    }
}