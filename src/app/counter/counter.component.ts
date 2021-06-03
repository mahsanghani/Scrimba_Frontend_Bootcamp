import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  let countEl = document.getElementById("count-el")
  let count = 0

  function increment() {
    count += 1
    // @ts-ignore
    countEl.innerText = String(count)
  }

  function save() {
    console.log(count)
  }
}
