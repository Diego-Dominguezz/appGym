import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GluteosPage } from './gluteos.page';

const routes: Routes = [
  {
    path: '',
    component: GluteosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GluteosPageRoutingModule {}
