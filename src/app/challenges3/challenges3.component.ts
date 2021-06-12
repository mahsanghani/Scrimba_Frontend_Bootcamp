import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenges3',
  templateUrl: './challenges3.component.html',
  styleUrls: ['./challenges3.component.css']
})
export class Challenges3Component implements OnInit {
  janeBtn: any;
  constructor() {
    this.janeBtn = "";
  }

  ngOnInit(): void {
    let player = "Per"
    let opponent = "Nick"
    let game = "AmazingFighter"
    let points = 0
    let hasWon = false
    points += 100
    hasWon = true
    if (hasWon) {
      console.log(`${player} got ${points} points and won the ${game} game!`)
    } else {
      console.log(`The winner is ${opponent}! ${player} lost the game`)
    }
    let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]
    function logCourses(myCourses: string[]): void{
      for(let i=0;i<myCourses.length;i++) {
        console.log(myCourses[i])
      }
    }
    logCourses(myCourses)
    let myCredits = localStorage.getItem("myCredits")
    console.log(myCredits)

    let data = [
      {
        player: "Jane",
        score: 52
      },
      {
        player: "Mark",
        score: 41
      }
    ]
    this.janeBtn = document.getElementById("jane-btn")
    this.janeBtn.addEventListener("click", function() {
      console.log(data[0].score)
    })
    function generateSentence(desc: string, arr: string[]) {
      let baseString = `The ${arr.length} ${desc} are `
      const lastIndex = arr.length - 1
      for (let i = 0; i < arr.length; i++) {
        if (i === lastIndex) {
          baseString += arr[i]
        } else {
          baseString += arr[i] + ", "
        }
      }
      return baseString
    }
    const sentence = generateSentence("highest mountains", ["Mount Everest", "K2"])
    console.log(sentence)

    const imgs = [
      "assets/train.jpg",
      "assets/blackjack.jpg",
      "assets/chameleon.png"
    ]
    const container = document.getElementById("container")

    function renderImages() {
      let imgsDOM = ""
      for (let i = 0; i < imgs.length; i++) {
        imgsDOM += `<img alt="Employee in the company" class="team-img" src="${imgs[i]}">`
      }
      // @ts-ignore
      container.innerHTML = imgsDOM
    }
    renderImages()
  }
}
