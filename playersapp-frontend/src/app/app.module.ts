import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {NavComponent} from './nav/nav.component';
import { AppComponent } from './app.component';
import { PlayersModule } from './players/players.module';

@NgModule({
  declarations: [
    AppComponent,
     NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlayersModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
