import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count: number = 5;
  countEl: any;
  name: string = "Per Harald Borgen";
  greeting: string = "Hi, my name is ";
  myGreeting: string = this.greeting + this.name;

  constructor(  ) {
  }

  ngOnInit(): void {
    this.countEl = document.getElementById("count-el");
  }

  increment() {
    this.count += 1
  }

  decrement() {
    this.count -= 1
  }

  save() {
    console.log(this.count)
  }
}
