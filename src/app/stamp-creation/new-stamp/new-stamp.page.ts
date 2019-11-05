import { Component, OnInit } from '@angular/core';
import { Stamp } from 'src/app/stamp';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-new-stamp',
  templateUrl: './new-stamp.page.html',
  styleUrls: ['./new-stamp.page.scss'],
})
export class NewStampPage implements OnInit {

  stampToBeCreated: Stamp;

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
    this.stampToBeCreated = new Stamp();
  }

  add(): void {

  }

  cancel(): void {
    this.navCtrl.back();
  }

}
