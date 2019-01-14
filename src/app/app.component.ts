import { Component } from '@angular/core';
import { Marker } from './models/marker.model';
import { WebsocketService } from './services/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Manila Tweets';
  lng = 121.03885236752194;
  lat = 14.5675261;
  zoom = 10;
  markers: Array<Marker> = new Array<Marker>();
  constructor(private wsService: WebsocketService) {
  }

  ngOnInit() {
    this.wsService.connect().subscribe(data => {
      if (data.tweet.coordinates) {
        const tweet = data.tweet;
        const marker = new Marker({
          lat: tweet.coordinates.coordinates[1],
          lng: tweet.coordinates.coordinates[0],
          text: tweet.text});
        this.markers.push(marker);
        this.lng = marker.lng;
        this.lat = marker.lat;
      }
    });
  }
}
