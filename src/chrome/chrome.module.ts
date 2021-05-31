import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ChromeComponent } from './chrome.component';

@NgModule({
  declarations: [
    ChromeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ChromeComponent]
})
export class ChromeModule { }
