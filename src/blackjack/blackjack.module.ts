import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BlackjackComponent } from './blackjack.component';

@NgModule({
  declarations: [
    BlackjackComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [BlackjackComponent]
})
export class BlackjackModule { }
