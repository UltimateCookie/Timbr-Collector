import { Component, OnInit } from '@angular/core';
import { Stamp } from '../../stamp';
import { FAKE_STAMPS } from '../../test-fake-stamps';

@Component({
  selector: 'app-stamps',
  templateUrl: './stamps.component.html',
  styleUrls: ['./stamps.component.scss'],
})
export class StampsComponent implements OnInit {
    stamps = FAKE_STAMPS;
    selectedStamp : Stamp;

  constructor() { }

  ngOnInit() {}

  selectStamp(stamp: Stamp): void {
    this.selectedStamp = stamp;
  }

}
