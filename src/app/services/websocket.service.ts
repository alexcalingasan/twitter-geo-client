import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class WebsocketService {

  private socket;

  constructor() { }

  connect(): Observable<any> {
    this.socket = io(environment.ws_url);

    const observable = new Observable(observer => {
        this.socket.on('tweet', (data) => {
          observer.next(data);
        });
        return () => {
          this.socket.disconnect();
        };
    });

    return observable;

  }

}
