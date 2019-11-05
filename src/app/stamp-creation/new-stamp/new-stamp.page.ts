import { Component, OnInit } from '@angular/core';
import { Stamp } from 'src/app/stamp';
import { NavController } from '@ionic/angular';
import { StampService } from 'src/app/stamp.service';

@Component({
  selector: 'app-new-stamp',
  templateUrl: './new-stamp.page.html',
  styleUrls: ['./new-stamp.page.scss'],
})
export class NewStampPage implements OnInit {

  stampToBeCreated: Stamp;

  constructor(public navCtrl: NavController, private stampService: StampService) { }

  ngOnInit() {
    this.stampToBeCreated = new Stamp();
  }

  add(): void {
    this.stampToBeCreated.id = this.stampService.stamps.length+1;
    this.stampService.addStamp(this.stampToBeCreated);
    this.navCtrl.back();
  }

  cancel(): void {
    this.navCtrl.back();
  }

}
