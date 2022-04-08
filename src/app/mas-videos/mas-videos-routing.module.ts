import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasVideosPage } from './mas-videos.page';

const routes: Routes = [
  {
    path: '',
    component: MasVideosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasVideosPageRoutingModule {}
