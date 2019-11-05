import { Component, OnInit } from '@angular/core';
import { Stamp } from '../../stamp';
import { NavController } from '@ionic/angular';
import { StampService } from '../../stamp.service';

@Component({
  selector: 'app-stamps',
  templateUrl: './stamps.component.html',
  styleUrls: ['./stamps.component.scss'],
})
export class StampsComponent implements OnInit {
    stamps: Stamp[];
    selectedStamp : Stamp;

  constructor(public navCtrl: NavController, private stampService: StampService) { }

  ngOnInit() {
    this.getStamps();
  }

  selectStamp(stamp: Stamp): void {
    this.selectedStamp = stamp;
  }

  goToNewStampPage(): void {
    this.navCtrl.navigateForward("new-stamp");
  }

  changeFavStatus(): void {
    this.selectedStamp.fav = !this.selectedStamp.fav;
  }

  getStamps(): void {
    this.stampService.getStamps()
        .subscribe(stamps => this.stamps = stamps);
  }

}
