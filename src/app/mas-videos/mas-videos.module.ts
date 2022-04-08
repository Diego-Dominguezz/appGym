import { MasVideosPage } from './mas-videos.page';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MasVideosPageRoutingModule } from './mas-videos-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MasVideosPageRoutingModule,
  ],
  declarations: [MasVideosPage]
})
export class MasVideosPageModule { }
