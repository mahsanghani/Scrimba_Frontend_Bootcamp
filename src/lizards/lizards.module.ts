import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LizardsComponent } from './lizards.component';

@NgModule({
  declarations: [
    LizardsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [LizardsComponent]
})
export class LizardsModule { }
