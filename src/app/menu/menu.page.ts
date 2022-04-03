/* eslint-disable max-len */
import { TricepService } from './../services/tricep.service';
import { Component, OnInit } from '@angular/core';
import { AbdomenService } from '../services/abdomen.service';
import { BicepService } from '../services/bicep.service';
import { GluteosService } from '../services/gluteos.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  rutineCards = [];

  constructor(
    private abdomenService: AbdomenService,
    private tricepService: TricepService,
    private gluteoService: GluteosService,
    private bicepService: BicepService,
  ) {
    this.rutineCards.push({
      title: this.abdomenService.getTitle().title,
      descripcion: this.abdomenService.getTitle().descripcion,
      img: this.abdomenService.getTitle().img,
      url: 'abdomen'
    });
    this.rutineCards.push({
      title: this.tricepService.getTitle().title,
      descripcion: this.tricepService.getTitle().descripcion,
      img: this.tricepService.getTitle().img,
      url: 'triceps'
    });
    this.rutineCards.push({
      title: this.gluteoService.getTitle().title,
      descripcion: this.gluteoService.getTitle().descripcion,
      img: this.gluteoService.getTitle().img,
      url: 'gluteos'
    });
    this.rutineCards.push({
      title: this.bicepService.getTitle().title,
      descripcion: this.bicepService.getTitle().descripcion,
      img: this.bicepService.getTitle().img,
      url: 'bicep'
    });

   }

  ngOnInit() {
  }

}
