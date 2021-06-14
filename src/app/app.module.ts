import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { BasicsComponent } from "./basics/basics.component";
import { TestingComponent } from './testing/testing.component';
import { BlackjackComponent } from './blackjack/blackjack.component';
import { CarouselComponent } from './carousel/carousel.component';
import { Challenges1Component } from './challenges1/challenges1.component';
import { Challenges2Component } from './challenges2/challenges2.component';
import { Challenges3Component } from './challenges3/challenges3.component';
import { ChessComponent } from './chess/chess.component';
import { ChromeComponent } from './chrome/chrome.component';
import { CounterComponent } from './counter/counter.component';
import { EmojisComponent } from './emojis/emojis.component';
import { FundamentalsComponent } from './fundamentals/fundamentals.component';
import { LizardsComponent } from './lizards/lizards.component';
import { ModalComponent } from './modal/modal.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicsComponent,
    BlackjackComponent,
    CarouselComponent,
    Challenges1Component,
    Challenges2Component,
    Challenges3Component,
    ChessComponent,
    ChromeComponent,
    CounterComponent,
    EmojisComponent,
    FundamentalsComponent,
    LizardsComponent,
    ModalComponent,
    SearchBarComponent,
    TestingComponent,
  ],
  imports: [
    BrowserModule,
    appRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
