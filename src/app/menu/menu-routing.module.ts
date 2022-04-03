import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage
  },
  {
    path: 'bicep',
    loadChildren: () => import('./bicep/bicep.module').then( m => m.BicepPageModule)
  },
  {
    path: 'abdomen',
    loadChildren: () => import('./abdomen/abdomen.module').then( m => m.AbdomenPageModule)
  },
  {
    path: 'triceps',
    loadChildren: () => import('./triceps/triceps.module').then( m => m.TricepsPageModule)
  },
  {
    path: 'gluteos',
    loadChildren: () => import('./gluteos/gluteos.module').then( m => m.GluteosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
