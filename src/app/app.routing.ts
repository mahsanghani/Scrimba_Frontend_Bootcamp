import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {BasicsComponent} from "../basics/basics.component";

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'basics', component: BasicsComponent },
  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
