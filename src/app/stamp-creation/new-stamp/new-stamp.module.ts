import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewStampPage } from './new-stamp.page';
import {WebcamModule} from 'ngx-webcam';

const routes: Routes = [
  {
    path: '',
    component: NewStampPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebcamModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewStampPage]
})
export class NewStampPageModule {}
