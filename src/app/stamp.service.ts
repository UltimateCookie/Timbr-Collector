import { Injectable } from '@angular/core';
import { FAKE_STAMPS } from './test-fake-stamps';
import { Stamp } from './stamp';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StampService {

  constructor() { }

  //temporary returns fake stamps untill api rest is available.
  getStamps(): Observable<Stamp[]> {
    return of(FAKE_STAMPS);
  }
}
