import { TricepService } from './../../services/tricep.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-triceps',
  templateUrl: './triceps.page.html',
  styleUrls: ['./triceps.page.scss'],
})
export class TricepsPage implements OnInit {

  tricepTitle: string;
  tricepData = [];

  constructor(
    private tricepService: TricepService,
  ) {
    this.tricepTitle = this.tricepService.getTitle().title;
    this.tricepData = this.tricepService.getTricepData();
   }

  ngOnInit() {
  }

}
