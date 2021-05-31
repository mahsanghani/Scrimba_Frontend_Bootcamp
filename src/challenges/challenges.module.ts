import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ChallengesComponent } from './challenges.component';

@NgModule({
  declarations: [
    ChallengesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ChallengesComponent]
})
export class ChallengesModule { }
