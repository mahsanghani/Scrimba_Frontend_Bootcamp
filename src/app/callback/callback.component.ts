import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {
  number: number = 0;
  person: any;
  people: any;
  peopleWithPets: any;

  constructor() { }

  ngOnInit(): void {
    function handleClick() {
      fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => console.log(data))
    }

    // @ts-ignore
    document.getElementById("new-deck").addEventListener("click", handleClick)

    function callback() {
        console.log("I finally ran!")
    }

    setTimeout(callback, 2000)

    this.people = [
        { name: "Jack", hasPet: true },
        { name: "Jill", hasPet: false },
        { name: "Alice", hasPet: true },
        { name: "Bob", hasPet: false },
    ]

    const gimmeThePets = (number: any) => {
        return this.person.hasPet
    }

    this.peopleWithPets = this.people.filter(gimmeThePets)
    console.log(this.peopleWithPets)

    const people = [
        { name: "Jack", hasPet: true },
        { name: "Jill", hasPet: false },
        { name: "Alice", hasPet: true },
        { name: "Bob", hasPet: false },
    ]

    function filterArray(array: { name: string; hasPet: boolean; }[], callback: { (person: any): any; (arg0: any): any; }) {
        const resultingArray = []
        // Write your filtering logic here
        for (let item of array) {
            const shouldBeIncluded = callback(item)
            if (shouldBeIncluded) {
                resultingArray.push(item)
            }
        }
        return resultingArray
    }

    let peopleWithPets = filterArray(people, function(person: { hasPet: any; }) {
         return person.hasPet
    })
    console.log(peopleWithPets)
  }

}
