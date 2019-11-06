import { Component, OnInit } from '@angular/core';
import { Stamp } from '../../stamp';
import { NavController, ModalController } from '@ionic/angular';
import { StampService } from '../../stamp.service';
import { ModalStampDetailsPage } from '../modal-stamp-details/modal-stamp-details.page';

@Component({
  selector: 'app-stamps',
  templateUrl: './stamps.component.html',
  styleUrls: ['./stamps.component.scss'],
})
export class StampsComponent implements OnInit {
    stamps: Stamp[];

  constructor(public navCtrl: NavController, private stampService: StampService, public modalController: ModalController) { }

  ngOnInit() {
    this.getStamps();
  }

  goToNewStampPage(): void {
    this.navCtrl.navigateForward("new-stamp");
  }

  getStamps(): void {
    this.stampService.getStamps()
        .subscribe(stamps => this.stamps = stamps);
  }

  async presentModal(stamp: Stamp) {
    const modal = await this.modalController.create({
      component: ModalStampDetailsPage,
      componentProps: {
        'selectedStamp': stamp
      }
    });
    return await modal.present();
  }

}
