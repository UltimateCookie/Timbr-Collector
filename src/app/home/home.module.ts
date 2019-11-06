import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

import { FilterPipe } from './stamps/filter.pipe';
import { StampsComponent } from './stamps/stamps.component';
import { ModalStampDetailsPage } from './modal-stamp-details/modal-stamp-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [
  HomePage,
  StampsComponent,
  ModalStampDetailsPage,
  FilterPipe
  ],
  entryComponents: [ModalStampDetailsPage]
})
export class HomePageModule {}
