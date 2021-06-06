import { Component, OnInit } from '@angular/core';
import {formatNumber} from "@angular/common";

@Component({
  selector: 'app-blackjack',
  templateUrl: './blackjack.component.html',
  styleUrls: ['./blackjack.component.css']
})
export class BlackjackComponent implements OnInit {
  firstCard: number = 10;
  secondCard: number = 9;
  sum: number = 0;
  hasBlackJack: boolean = false;
  isAlive: boolean = false;
  message: string = "";
  messageEl: any;
  sumEl: any;
  cardsEl: any;
  nextCard: number = 2;
  cards: number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.firstCard = 10
    this.secondCard = 11
    this.nextCard = 2
    this.cards = [this.firstCard,this.secondCard,this.nextCard]
    this.sum = this.firstCard + this.secondCard
    this.hasBlackJack = false
    this.isAlive = true
    this.messageEl = document.getElementById("message-el")
    this.sumEl = document.getElementById("sum-el")
    this.cardsEl = document.getElementById("cards-el")
  }

  startGame(): void {
    this.renderGame()
  }

  renderGame(): void {
    this.cardsEl.textContent = "Cards: " + this.cards[0] + " " + this.cards[1]
    this.sumEl.textContent = "Sum: " + this.sum
    if (this.sum <= 20) {
      this.message = "Do you want to draw a new card?";
    } else if (this.sum === 21) {
      this.message = "Woohoo! You've got Blackjack!";
      this.hasBlackJack = true
    } else {
      this.message = "You're out of the game!";
      this.isAlive = false
    }
    console.log(this.message);
    this.messageEl.textContent = this.message;
  }

  newCard(): void {
    console.log("Drawing a new card from the deck!");
    this.nextCard = 11;
    this.sum += this.nextCard
    this.renderGame()
    }
}
