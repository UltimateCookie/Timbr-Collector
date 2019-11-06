import { Pipe, PipeTransform } from '@angular/core';
import { Stamp } from 'src/app/stamp';
import * as _ from 'lodash'; 

@Pipe({
    name: 'unique',
    pure: false
  })
  export class UniquePipe implements PipeTransform {
      transform(stamps: Stamp[], param: string): any{
          if(stamps!== undefined && stamps!== null){
              if(param === "year") {              
                return _.uniqBy(stamps, 'year');
              }
              if(param === "country") {
                return _.uniqBy(stamps, 'country');
            }
          }
          return stamps;
      }
  }