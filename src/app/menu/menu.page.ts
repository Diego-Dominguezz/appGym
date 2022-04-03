/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { AbdomenService } from '../services/abdomen.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  abdomenCard = [];
  rutineCards = [
    { title: 'Bicep', img: 'https://www.istockphoto.com/resources/images/PhotoFTLP/1154103408.jpg', color: 'primary', url: 'bicep', description: 'Rutina de biceps' },
    { title: 'Abdomen', img: 'https://www.istockphoto.com/resources/images/PhotoFTLP/1154103408.jpg', color: 'primary', url: 'abdomen', description: 'Rutina de abdomen' },

  ];

  constructor(
    private abdomenService: AbdomenService,
  ) { }

  ngOnInit() {
    this.abdomenCard = this.abdomenService.getAbdomen();
  }

}
