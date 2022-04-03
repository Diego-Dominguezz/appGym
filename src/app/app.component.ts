import { TricepService } from './services/tricep.service';
import { BicepService } from 'src/app/services/bicep.service';
import { GluteosService } from './services/gluteos.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AbdomenService } from './services/abdomen.service';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home-outline' },
    { title: 'Rutinas', url: '/menu', icon: 'accessibility-outline' }

  ];
  public labels = [];
  constructor(
    private router: Router,
    private abdomen: AbdomenService,
    private gluteos: GluteosService,
    private tricep: TricepService,
    private bicep: BicepService,
    private scroller: ViewportScroller,
  ) {
    router.events.subscribe((val) => {
      if (this.router.routerState.snapshot.url === '/menu/abdomen') {
        return this.labels = this.abdomen.getAbdomen();
      }
      if (this.router.routerState.snapshot.url === '/menu/gluteos') {
        return this.labels = this.gluteos.getGluteosData();
      }
      if (this.router.routerState.snapshot.url === '/menu/triceps') {
        return this.labels = this.tricep.getTricepData();
      }
      if (this.router.routerState.snapshot.url === '/menu/bicep') {
        return this.labels = this.bicep.getBicepData();
      }
      return this.labels = [{ nombre: 'Seleccione una rutina para ver titulos' }];
    });
  }

  labelClick(label) {
    console.log('Clicked: ' + label.nombre);
    console.log(this.router.routerState.snapshot.url);
    this.scroller.scrollToAnchor(label.nombre);
    console.log(this.scroller);

  }
  onActivate(event) {
    console.log('Activated', event);

  }
}
