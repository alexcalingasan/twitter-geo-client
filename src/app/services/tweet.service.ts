import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { WebsocketService } from './websocket.service';

@Injectable()
export class TweetService {

    tweets: Observable<any>;

    constructor(private wsService: WebsocketService) {
        this.tweets = wsService.connect();
    }

}
