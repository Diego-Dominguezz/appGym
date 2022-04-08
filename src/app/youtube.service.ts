/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  apiKey: string = 'AIzaSyB-ODZFpeUFgHhKyzdpeBxZTJ7d235N08M';

  constructor(public http: HttpClient) { }

  getVideosForChanel(channel, maxResults): Observable<any> {
    const url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + channel + '&order=date&part=snippet &type=video,id&maxResults=' + maxResults;
    return this.http.get(url).pipe(map(res => {
      console.log(res);
      return res;
    }));
  }
}
