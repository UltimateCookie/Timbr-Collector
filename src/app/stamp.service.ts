import { Injectable } from '@angular/core';
import { FAKE_STAMPS } from './test-fake-stamps';
import { Stamp } from './stamp';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StampService {
  stamps: Stamp[] = FAKE_STAMPS;

  constructor() { }

  getStamps(): Observable<Stamp[]> {
    return of(this.stamps);
  }

  addStamp(stamp: Stamp): boolean {
    this.stamps.push(stamp);
    return true;

  }

  //use HTTP to conect to API REST here
}
