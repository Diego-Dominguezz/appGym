import { Component, OnInit } from '@angular/core';
import { BicepService } from 'src/app/services/bicep.service';

@Component({
  selector: 'app-bicep',
  templateUrl: './bicep.page.html',
  styleUrls: ['./bicep.page.scss'],
})
export class BicepPage implements OnInit {

  bicepTitle: string;
  bicepData = [];

  constructor(
    private bicepService: BicepService
  ) { }

  ngOnInit() {
    this.bicepTitle = this.bicepService.getTitle().title;
    this.bicepData = this.bicepService.getBicepData();
  }

}
