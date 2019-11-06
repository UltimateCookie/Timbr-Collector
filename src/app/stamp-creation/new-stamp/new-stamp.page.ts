import { Component, OnInit } from '@angular/core';
import { Stamp } from 'src/app/stamp';
import { NavController, Platform } from '@ionic/angular';
import { StampService } from 'src/app/stamp.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { DomSanitizer } from '@angular/platform-browser';
import { WebcamImage } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-new-stamp',
  templateUrl: './new-stamp.page.html',
  styleUrls: ['./new-stamp.page.scss'],
})
export class NewStampPage implements OnInit {

  stampToBeCreated: Stamp;
  isBrowser: boolean = false;
  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  showWebcam: boolean = true;
  
  constructor(public navCtrl: NavController,
     private stampService: StampService,
      private camera: Camera,
      private platform: Platform) { }

  ngOnInit() {
    this.stampToBeCreated = new Stamp();
    if (!this.platform.is('cordova')) {
        this.isBrowser = true;
    }
  }

  public handleImage(webcamImage: WebcamImage): void {
    this.stampToBeCreated.picture = webcamImage.imageAsDataUrl;
    this.showWebcam = false;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  takePicture(): void {
    if(this.isBrowser) {
      this.takePictureBrowser();
      return;
    }
    this.takePictureAndroid();

  }

  takePictureBrowser(): void {
    this.trigger.next();
  }

  takePictureAndroid(): void {
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

  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
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
