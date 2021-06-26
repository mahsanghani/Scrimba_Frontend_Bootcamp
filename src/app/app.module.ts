import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { appRoutingModule } from './app.routing';
import { ApiCapstoneComponent } from './api-capstone/api-capstone.component';
import { AppComponent } from './app.component';
import { BasicsComponent } from "./basics/basics.component";
import { BbqComponent } from './bbq/bbq.component';
import { BlackjackComponent } from './blackjack/blackjack.component';
import { BlogspaceComponent } from './blogspace/blogspace.component';
import { BoredbotComponent } from './boredbot/boredbot.component';
import { CallbackComponent } from './callback/callback.component';
import { CarouselComponent } from './carousel/carousel.component';
import { Challenges1Component } from './challenges1/challenges1.component';
import { Challenges2Component } from './challenges2/challenges2.component';
import { Challenges3Component } from './challenges3/challenges3.component';
import { Challenges4Component } from './challenges4/challenges4.component';
import { Challenges5Component } from './challenges5/challenges5.component';
import { ChessComponent } from './chess/chess.component';
import { ChromeComponent } from './chrome/chrome.component';
import { CounterComponent } from './counter/counter.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DiceComponent } from './dice/dice.component';
import { EmojisComponent } from './emojis/emojis.component';
import { FundamentalsComponent } from './fundamentals/fundamentals.component';
import { LizardsComponent } from './lizards/lizards.component';
import { ModalComponent } from './modal/modal.component';
import { PacmanComponent } from './pacman/pacman.component';
import { PromiseComponent } from './promise/promise.component';
import { RejectionComponent } from './rejection/rejection.component';
import { Responsive1Component } from './responsive1/responsive1.component';
import { Responsive2Component } from './responsive2/responsive2.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SnakeComponent } from './snake/snake.component';
import { TestingComponent } from './testing/testing.component';
import { WarComponent } from './war/war.component';

@NgModule({
  declarations: [
    ApiCapstoneComponent,
    AppComponent,
    BasicsComponent,
    BbqComponent,
    BlackjackComponent,
    BlogspaceComponent,
    BoredbotComponent,
    CallbackComponent,
    CarouselComponent,
    Challenges1Component,
    Challenges2Component,
    Challenges3Component,
    Challenges4Component,
    Challenges5Component,
    ChessComponent,
    ChromeComponent,
    CounterComponent,
    DashboardComponent,
    DiceComponent,
    EmojisComponent,
    FundamentalsComponent,
    LizardsComponent,
    ModalComponent,
    PacmanComponent,
    PromiseComponent,
    RejectionComponent,
    Responsive1Component,
    Responsive2Component,
    SearchBarComponent,
    SnakeComponent,
    TestingComponent,
    WarComponent,
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
