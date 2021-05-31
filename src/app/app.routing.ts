import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {BasicsComponent} from "../basics/basics.component";

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'basics', component: BasicsComponent },
  /*{ path: 'blackjack', component: BlackjackComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'challenges', component: ChallengesComponent },
  { path: 'chess', component: ChessComponent },
  { path: 'chrome', component: ChromeComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'lizards', component: LizardsComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'search_bar', component: SearchBarComponent },
  { path: 'basics', component: BasicsComponent },
  { path: 'basics', component: BasicsComponent },*/
  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
