/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  rutineCards = [
    { title: 'Bicep', img: 'https://www.istockphoto.com/resources/images/PhotoFTLP/1154103408.jpg', color: 'primary', url: 'bicep', description: 'Rutina de biceps' },
    { title: 'Abdomen', img: 'https://www.istockphoto.com/resources/images/PhotoFTLP/1154103408.jpg', color: 'primary', url: 'abdomen', description: 'Rutina de abdomen' },

  ];

  constructor(
  ) { }

  ngOnInit() {
  }

}
