import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count: number;
  countEl: number;
  name: string;
  greeting: string;
  myGreeting: string;

  constructor(
    count: number,
    countEl: number,
    name:string,
    greeting:string,
    myGreeting:string
  ) {
    this.count = count
    this.countEl = countEl
    this.name = name
    this.greeting = greeting
    this.myGreeting = myGreeting
  }

  ngOnInit(): void {
  }

  name = "Per Harald Borgen"
  greeting = "Hi, my name is "
  myGreeting = greeting + name
  console.log("test")

  countEl = document.getElementById("count-el")
  count = 0

  increment(count: number) {
    count += 1
    // @ts-ignore
    countEl.innerText = String(count)
  }
  save(count: number) {
    console.log(count)
  }
}
