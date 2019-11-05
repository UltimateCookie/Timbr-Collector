import { Component, OnInit } from '@angular/core';
import { Stamp } from '../../stamp';
import { FAKE_STAMPS } from '../../test-fake-stamps';
import { NavController } from '@ionic/angular';
import { NewStampPage } from '../../stamp-creation/new-stamp/new-stamp.page'

@Component({
  selector: 'app-stamps',
  templateUrl: './stamps.component.html',
  styleUrls: ['./stamps.component.scss'],
})
export class StampsComponent implements OnInit {
    stamps = FAKE_STAMPS;
    selectedStamp : Stamp;

  constructor(public navCtrl: NavController) { }

  ngOnInit() {}

  selectStamp(stamp: Stamp): void {
    this.selectedStamp = stamp;
  }

  goToNewStampPage(): void {
    this.navCtrl.navigateForward("new-stamp");
  }

  changeFavStatus(): void {
    this.selectedStamp.fav = !this.selectedStamp.fav;
  }

}
