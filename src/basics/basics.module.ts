import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BasicsComponent } from './basics.component';
import {appRoutingModule} from "../app/app.routing";

@NgModule({
  declarations: [
    BasicsComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule
  ],
  providers: [],
  bootstrap: [BasicsComponent]
})
export class BasicsModule { }
