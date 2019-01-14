import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { WebsocketService } from './services/websocket.service';
import { MatToolbarModule, MatCardModule } from '@angular/material';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    AgmCoreModule.forRoot({
      apiKey: environment.google_map_key
    })
  ],
  providers: [WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule {}
