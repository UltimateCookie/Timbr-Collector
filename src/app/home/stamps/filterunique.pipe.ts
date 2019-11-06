import { Pipe, PipeTransform } from '@angular/core';
import { Stamp } from 'src/app/stamp';
import * as _ from 'lodash'; 
import { filter } from 'minimatch';

@Pipe({
    name: 'unique',
    pure: false
  })
  export class UniquePipe implements PipeTransform {
      transform(value: Stamp[], param: string): any{
          if(value!== undefined && value!== null){
              if(param === "year") {
                return _.uniqBy(value, 'year');
              }
              if(param === "country") {
                return _.uniqBy(value, 'country');
            }
          }
          return value;
      }
  }