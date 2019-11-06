import { Component, OnInit, Input } from '@angular/core';
import { Stamp } from 'src/app/stamp';
import { ModalController } from '@ionic/angular';
import { StampService } from 'src/app/stamp.service';

@Component({
  selector: 'app-modal-stamp-details',
  templateUrl: './modal-stamp-details.page.html',
  styleUrls: ['./modal-stamp-details.page.scss'],
})
export class ModalStampDetailsPage implements OnInit {

  @Input() selectedStamp: Stamp;
  constructor(public modalController: ModalController, private stampService: StampService) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  /**
   * Set or unset as favorite
   */
  changeFavStatus() {
    this.selectedStamp.fav = !this.selectedStamp.fav;
    this.stampService.setFavStatus(this.selectedStamp.id, this.selectedStamp.fav);
  }

}
