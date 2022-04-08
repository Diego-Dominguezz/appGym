import { AfterViewInit, Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { YoutubeService } from '../youtube.service';

@Component({
  selector: 'app-mas-videos',
  templateUrl: './mas-videos.page.html',
  styleUrls: ['./mas-videos.page.scss'],
})
export class MasVideosPage implements OnInit, OnDestroy, AfterViewInit {

  videos: any[] = [];
  unsubscribe$: Observable<any>;

  constructor(
    private youtubeService: YoutubeService,
    private zone: NgZone,
  ) {

  }

  ngOnInit() {

  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }
  ngAfterViewInit(): void {
    this.zone.run(() => {
      setTimeout(() => {
        this.youtubeService
          .getVideosForChanel('UCLfSLjg1KJX3wyWH4dXUxgA', 60)
          .pipe(take(1))
          .subscribe(lista => {
            console.log(lista);
            for (const element of lista.items) {
              this.videos.push(element);
            }
          });
      }, 1000);
    });
  }

}
