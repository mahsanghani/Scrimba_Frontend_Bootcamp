import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blackjack',
  templateUrl: './blackjack.component.html',
  styleUrls: ['./blackjack.component.css']
})
export class BlackjackComponent implements OnInit {
  firstCard: number = 10;
  secondCard: number = 11;
  sum: number = 0;
  hasBlackJack: boolean = false;
  isAlive: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.firstCard = 10
    this.secondCard = 11
    this.sum = this.firstCard + this.secondCard + 4
    this.hasBlackJack = false
    this.isAlive = true

    if (this.sum <= 20) {
      console.log("Do you want to draw a new card? 🙂")
    } else if (this.sum === 21) {
      console.log("Wohoo! You've got Blackjack! 🥳")
      this.hasBlackJack = true
    } else {
      console.log("You're out of the game! 😭")
      this.isAlive = false
    }
  }
}
