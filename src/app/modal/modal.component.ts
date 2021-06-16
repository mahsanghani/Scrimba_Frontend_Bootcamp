import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  open: any;
  close: any;

  constructor() {
    // @ts-ignore
    this.open = document.getElementById("open-modal").addEventListener("click", function() {
      // @ts-ignore
      document.getElementById("overlay").style.display = "block";
    });
    // @ts-ignore
    this.close = document.getElementById("close-modal").addEventListener("click", function() {
      // @ts-ignore
      document.getElementById("overlay").style.display = "none";
    });
  }

  ngOnInit(): void {
  }

  /**
   Creating interactive buttons: Open Modal

   0) Add 'display: none' to '#overlay' - we want to hide it initially!
   1) Use document.getElementById to target "open-modal"
   2) Add an event listener of "click"
   3) Use document.getElementById to target "overlay" and change the style.display to "block"
   **/

  /**
   Creating interactive buttons: Close Modal

   1) Use document.getElementById to target "close-modal"
   2) Add an event listener of "click"
   3) Use document.getElementById to target "overlay" and change the style.display to "none"
   **/
}
