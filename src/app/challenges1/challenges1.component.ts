import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges1.component.html',
  styleUrls: ['./challenges1.component.css']
})
export class Challenges1Component implements OnInit {
  errorParagraph: any;
  sumEl: any;
  num1: any;
  num2: any;

  constructor() {
    this.errorParagraph = ""
    this.sumEl = document.getElementById("sum-el")
    this.num1 = document.getElementById("num2-el")
    this.num2 = document.getElementById("num1-el")
  }

  ngOnInit(): void {
    let firstName = "Per"
    let lastName = "Borgen"
    let fullName = firstName + " " + lastName
    console.log(fullName)

    let name = "Linda"
    let greeting = "Hi there"
    function greetLinda() {
      console.log(greeting + ", " + name + "!")
    }
    greetLinda()

    let myPoints = 3
    function add3Points() {
      myPoints += 3
    }
    function remove1Points() {
      myPoints -= 1
    }
    add3Points()
    add3Points()
    add3Points()
    remove1Points()
    remove1Points()
    console.log(myPoints)

    console.log("2" + 2) // "22"
    console.log(11 + 7) //  18
    console.log(6 + "5") // "65"
    console.log("My points: " + 5 + 9) // "My points: 59"
    console.log(2 + 2) // 4
    console.log("11" + "14") //  "1114"

    this.errorParagraph = document.getElementById("error")
    console.log(this.errorParagraph)

    function purchase(this: any) {
      console.log("button clicked")
      this.errorParagraph.textContent = "Something went wrong, please try again"
    }
  }

  add() {
    let result = this.num1 + this.num2
    this.sumEl.textContent = "Sum: " + result
  }

  subtract() {
    let result = this.num1 - this.num2
    this.sumEl.textContent = "Sum: " + result
  }

  division() {
    let result = this.num1 / this.num2
    this.sumEl.textContent = "Sum: " + result
  }

  multiply() {
    let result = this.num1 * this.num2
    this.sumEl.textContent = "Sum: " + result
  }
}
