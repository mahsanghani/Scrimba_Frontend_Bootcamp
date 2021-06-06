import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenges2',
  templateUrl: './challenges2.component.html',
  styleUrls: ['./challenges2.component.css']
})
export class Challenges2Component implements OnInit {
  appleShelf: any;
  orangeShelf: any;

  constructor() {
    this.appleShelf = document.getElementById("apple-shelf")
    this.orangeShelf = document.getElementById("orange-shelf")
  }

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

    let age = 75

    if (age < 6) {
      console.log("free")
    } else if (age < 18) {
      console.log("child discount")
    } else if (age < 27) {
      console.log("student discount")
    } else if (age < 67) {
      console.log("full price")
    } else {
      console.log("senior citizen discount")
    }

    let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

    console.log("The 5 largest countries in the world:")
    for (let i = 0; i < largeCountries.length; i++) {
      console.log("- " + largeCountries[i])
    }

    let largeCountries2 = ["Tuvalu","India","USA","Indonesia","Monaco"]

    largeCountries2.pop()
    largeCountries2.push("Pakistan")
    largeCountries2.shift()
    largeCountries2.unshift("China")
    console.log(largeCountries2)

    let dayOfMonth = 13
    let weekday = "Friday"
    if (dayOfMonth === 13 && weekday === "Friday") {
      console.log("😱")
    }

    let hands = ["rock", "paper", "scissor"]
    function getHand() {
      let randomIndex = Math.floor( Math.random() * 3)
      return hands[randomIndex]
    }
    console.log(getHand())

    let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
    this.appleShelf = document.getElementById("apple-shelf")
    this.orangeShelf = document.getElementById("orange-shelf")

    const sortFruit = () => {
      for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "🍎") {
          this.appleShelf.textContent += "🍎"
        } else if (fruit[i] === "🍊") {
          this.orangeShelf.textContent += "🍊"
        }
      }
    }

    sortFruit()
  }
}
