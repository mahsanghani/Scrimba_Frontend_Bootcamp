import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SearchBarComponent } from './search_bar.component';

@NgModule({
  declarations: [
    SearchBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [SearchBarComponent]
})
export class SearchBarModule { }
