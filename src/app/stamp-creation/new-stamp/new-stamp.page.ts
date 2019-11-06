import { Component, OnInit } from '@angular/core';
import { Stamp } from 'src/app/stamp';
import { NavController } from '@ionic/angular';
import { StampService } from 'src/app/stamp.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-new-stamp',
  templateUrl: './new-stamp.page.html',
  styleUrls: ['./new-stamp.page.scss'],
})
export class NewStampPage implements OnInit {

  stampToBeCreated: Stamp;

  constructor(public navCtrl: NavController,
     private stampService: StampService,
      private camera: Camera,
      private sanitizer: DomSanitizer) { }

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

  takePicture() {
    const options: CameraOptions = {
      quality: 10,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;
     this.stampToBeCreated.picture = base64Image;
    }, (err) => {
     // Handle error
    });
  }
}
