import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {BasicsComponent} from "./basics/basics.component";
import {BlackjackComponent} from "./blackjack/blackjack.component";
import {CarouselComponent} from "./carousel/carousel.component";
import {Challenges1Component} from "./challenges1/challenges1.component";
import {Challenges2Component} from "./challenges2/challenges2.component";
import {Challenges3Component} from "./challenges3/challenges3.component";
import {ChessComponent} from "./chess/chess.component";
import {ChromeComponent} from "./chrome/chrome.component";
import {CounterComponent} from "./counter/counter.component";
import {LizardsComponent} from "./lizards/lizards.component";
import {ModalComponent} from "./modal/modal.component";
import {SearchBarComponent} from "./search-bar/search-bar.component";
import {TestingComponent} from "./testing/testing.component";

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'basics', component: BasicsComponent },
  { path: 'blackjack', component: BlackjackComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'challenges1', component: Challenges1Component },
  { path: 'challenges2', component: Challenges2Component },
  { path: 'challenges3', component: Challenges3Component },
  { path: 'chess', component: ChessComponent },
  { path: 'chrome', component: ChromeComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'lizards', component: LizardsComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'search_bar', component: SearchBarComponent },
  { path: 'testing', component: TestingComponent },
  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
