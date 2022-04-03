import { AbdomenService } from './../../services/abdomen.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abdomen',
  templateUrl: './abdomen.page.html',
  styleUrls: ['./abdomen.page.scss'],
})
export class AbdomenPage implements OnInit {

  abdomenTitle: string;
  abdomenData = [];

  constructor(
    private abdomenService: AbdomenService,
  ) {
    this.abdomenTitle = this.abdomenService.getTitle().title;
    this.abdomenData = this.abdomenService.getAbdomen();
   }

  ngOnInit() {
  }

}
