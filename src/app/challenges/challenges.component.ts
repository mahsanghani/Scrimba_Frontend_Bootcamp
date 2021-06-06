import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css']
})
export class ChallengesComponent implements OnInit {
  errorParagraph: any;
  sumEl: any;

  constructor() {
    this.errorParagraph = ""
    this.sumEl = ""
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

    let num1 = 8
    let num2 = 2
    document.getElementById("num1-el").textContent = num1
    document.getElementById("num2-el").textContent = num2
    let sumEl = document.getElementById("sum-el")
    function add() {
      let result = num1 + num2
      this.sumEl.textContent = "Sum: " + result
    }
    function subtract() {
      let result = num1 - num2
      this.sumEl.textContent = "Sum: " + result
    }
    function divide() {
      let result = num1 / num2
      this.sumEl.textContent = "Sum: " + result
    }
    function multiply() {
      let result = num1 * num2
      this.sumEl.textContent = "Sum: " + result
    }

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

/*Create two variables, firstName and lastName
Concatenate the two variables into a third variable called fullName
Log fullName to the console*/

/*Create a function that logs out "Hi there, Linda!" when called*/

/*Create two functions, add3Points() and remove1Point(), and have them
add/remove points to/from the myPoints variable
Call the functions to that the line below logs out 10*/

/*Try to predict what each of the lines will log out*/

/*When the user clicks the purchase button, render out
"Something went wrong, please try again" in the paragraph
that has the id="error".*/

/*Create four functions: add(), subtract(), divide(), multiply()
Call the correct function when the user clicks on one of the buttons
Perform the given calculation using num1 and num2
Render the result of the calculation in the paragraph with id="sum-el"
E.g. if the user clicks on the "Plus" button, you should render
"Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"*/

/*Create a person object that contains three keys: name, age, and county.
Use yourself as an example to set the values for name, age, and country
Create a function, logData(), that uses the person object to create a
string in the following format:
"Per is 35 years old and lives in Norway"
Call the logData() function to verify that it works*/

/*less than 6 years old -> free
6 to 17 years old     -> child discount
18 to 26 years old    -> student discount
27 to 66 years old    -> full price
over 66 years old     -> senior citizen discount*/

/*Create a conditional statement (if/else/else if) that logs out the discount
the passenger will get based upon the value of the age variable*/

