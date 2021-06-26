import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    fetch("https://apis.scrimba.com/bored/api/activity")
      .then(function(res) {
        return "Hello"
      })
      .then(function(whatever) {
        console.log(whatever)
        return "World"
      })
      .then(function(another) {
        console.log(another)
      })
  }

}
