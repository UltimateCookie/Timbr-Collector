import { Injectable } from '@angular/core';
import { FAKE_STAMPS } from './test-fake-stamps';
import { Stamp } from './stamp';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StampService {
  stamps: Stamp[] = FAKE_STAMPS;
  stampsSubject = new Subject<Stamp[]>();

  constructor() { }


  addStamp(stamp: Stamp): boolean {
    this.stamps.push(stamp);
    this.emitStampsSubject();
    return true;
  }

  setFavStatus(id: number, fav: boolean): void {
    this.stamps[id-1].fav = fav;
    this.emitStampsSubject();
  }

  emitStampsSubject() {
    this.stampsSubject.next(this.stamps);
  }

  //connect to API REST here
}
