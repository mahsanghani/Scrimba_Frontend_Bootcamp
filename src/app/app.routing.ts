import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {BasicsComponent} from "./basics/basics.component";
import {BbqComponent} from "./bbq/bbq.component";
import {BlackjackComponent} from "./blackjack/blackjack.component";
import {CarouselComponent} from "./carousel/carousel.component";
import {Challenges1Component} from "./challenges1/challenges1.component";
import {Challenges2Component} from "./challenges2/challenges2.component";
import {Challenges3Component} from "./challenges3/challenges3.component";
import {Challenges4Component} from "./challenges4/challenges4.component";
import {Challenges5Component} from "./challenges5/challenges5.component";
import {ChessComponent} from "./chess/chess.component";
import {ChromeComponent} from "./chrome/chrome.component";
import {CounterComponent} from "./counter/counter.component";
import {DiceComponent} from "./dice/dice.component";
import {EmojisComponent} from "./emojis/emojis.component";
import {FundamentalsComponent} from './fundamentals/fundamentals.component';
import {LizardsComponent} from "./lizards/lizards.component";
import {ModalComponent} from "./modal/modal.component";
import {PacmanComponent} from "./pacman/pacman.component";
import {Responsive1Component} from "./responsive1/responsive1.component";
import {Responsive2Component} from "./responsive2/responsive2.component";
import {SearchBarComponent} from "./search-bar/search-bar.component";
import {SnakeComponent} from "./snake/snake.component";
import {TestingComponent} from "./testing/testing.component";

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'basics', component: BasicsComponent },
  { path: 'bbq', component: BbqComponent},
  { path: 'blackjack', component: BlackjackComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'challenges1', component: Challenges1Component },
  { path: 'challenges2', component: Challenges2Component },
  { path: 'challenges3', component: Challenges3Component },
  { path: 'challenges4', component: Challenges4Component },
  { path: 'challenges5', component: Challenges5Component },
  { path: 'chess', component: ChessComponent },
  { path: 'chrome', component: ChromeComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'dice', component: DiceComponent},
  { path: 'emojis', component: EmojisComponent },
  { path: 'fundamentals', component: FundamentalsComponent },
  { path: 'lizards', component: LizardsComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'pacman', component: PacmanComponent },
  { path: 'responsive1', component: Responsive1Component},
  { path: 'responsive2', component: Responsive2Component},
  { path: 'search_bar', component: SearchBarComponent },
  { path: 'snake', component: SnakeComponent },
  { path: 'testing', component: TestingComponent },
  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
