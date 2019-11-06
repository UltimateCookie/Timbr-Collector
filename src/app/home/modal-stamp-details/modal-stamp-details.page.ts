import { Component, OnInit, Input } from '@angular/core';
import { Stamp } from 'src/app/stamp';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-stamp-details',
  templateUrl: './modal-stamp-details.page.html',
  styleUrls: ['./modal-stamp-details.page.scss'],
})
export class ModalStampDetailsPage implements OnInit {

  @Input() selectedStamp: Stamp;
  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
