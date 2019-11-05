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

//connect API REST here.
  getStamps(): Observable<Stamp[]> {
    return of(this.stamps);
  }

  addStamp(stamp: Stamp): boolean {
    this.stamps.push(stamp);
    return true;

  }
}
