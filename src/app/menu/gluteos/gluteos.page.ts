import { GluteosService } from './../../services/gluteos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gluteos',
  templateUrl: './gluteos.page.html',
  styleUrls: ['./gluteos.page.scss'],
})
export class GluteosPage implements OnInit {

  gluteosTitle: string;
  gluteosData = [];

  constructor(
    private gluteosService: GluteosService,
  ) {
    this.gluteosTitle = this.gluteosService.getTitle().title;
    this.gluteosData = this.gluteosService.getGluteosData();
  }

  ngOnInit() {
  }

}
