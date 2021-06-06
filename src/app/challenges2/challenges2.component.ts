import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenges2',
  templateUrl: './challenges2.component.html',
  styleUrls: ['./challenges2.component.css']
})
export class Challenges2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let person = {
      name: "Per",
      age: 35,
      country: "Norway"
    }
    function logData() {
      console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
    }
    logData()
  }

}
