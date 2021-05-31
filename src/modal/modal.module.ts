import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ModalComponent } from './modal.component';

@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ModalComponent]
})
export class ModalModule { }
