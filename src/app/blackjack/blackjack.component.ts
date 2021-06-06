import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blackjack',
  templateUrl: './blackjack.component.html',
  styleUrls: ['./blackjack.component.css']
})
export class BlackjackComponent implements OnInit {
  firstCard: number = 10;
  secondCard: number = 9;
  min: number = 1;
  max: number = 11;
  sum: number = 0;
  hasBlackJack: boolean = false;
  isAlive: boolean = false;
  message: string = "";
  messageEl: any;
  sumEl: any;
  cardsEl: any;
  greetingEl: any;
  playerEl: any;
  nextCard: number = 2;
  cards: number[] = [];
  Player = {
    name: "Ahsan",
    chips: 1234,
    sayHello: function() {
      console.log("Heisann!")
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.firstCard = this.getRandomCard(1,14);
    this.secondCard = this.getRandomCard(1,14);
    this.nextCard = this.getRandomCard(1,14);
    this.min = 1;
    this.max = 11;
    this.cards = [this.firstCard,this.secondCard];
    this.sum = this.firstCard + this.secondCard;
    this.hasBlackJack = false;
    this.isAlive = true;
    this.messageEl = document.getElementById("message-el");
    this.sumEl = document.getElementById("sum-el");
    this.cardsEl = document.getElementById("cards-el");
    this.greetingEl = document.getElementById("greeting-el");
    this.playerEl = document.getElementById("player-el")
    this.Player = {
      name: "Ahsan",
      chips: 1234,
      sayHello: function() {
        console.log("Heisann!")
      }
    }
  }

  startGame(): void {
    this.isAlive = true;
    this.firstCard = this.getRandomCard(1,14);
    this.secondCard = this.getRandomCard(1,14);
    this.cards = [this.firstCard, this.secondCard];
    this.sum = this.firstCard + this.secondCard;
    this.renderGame();
  }

  renderGame(): void {
    this.cardsEl.textContent = "Cards: ";
    for (let i=0;i<this.cards.length;i++){
      this.cardsEl.textContent += this.cards[i] + " ";
    }
    this.sumEl.textContent = "Sum: " + this.sum;
    if (this.sum <= 20) {
      this.message = "Do you want to draw a new card?";
    } else if (this.sum === 21) {
      this.message = "Woohoo! You've got Blackjack!";
      this.hasBlackJack = true;
    } else {
      this.message = "You're out of the game!";
      this.isAlive = false;
    }
    console.log(this.message);
    this.messageEl.textContent = this.message;
    this.playerEl.textContent = this.Player.name + ": $" + this.Player.chips
  }

  newCard(): void {
    /*if(this.isAlive===true&&this.hasBlackJack===false)*/
    if(this.isAlive&&!this.hasBlackJack){
      console.log("Drawing a new card from the deck!");
      this.nextCard = this.getRandomCard(1,14);
      this.sum += this.nextCard;
      this.cards.push(this.nextCard);
      this.renderGame();
    }
    for (let i=0;i<this.cards.length;i++){
      console.log(this.cards[i]);
    }
    for (let i=1;i<11;i++){
      console.log(i);
    }
    let messages = [
      "Hey, how's it going?",
      "I'm great, thank you! How about you?",
      "All good. Been working on my portfolio lately.",
      "Same here!",
      "Great to hear",
      "🙌"
    ]
    for (let i=0;i<messages.length;i++) {
      console.log(messages[i]);
    }
    let sentence = ["Hello ", "my ", "name ", "is ", "Per"];
    for (let i = 0; i < sentence.length; i++) {
      this.greetingEl.textContent += sentence[i] + " ";
    }
  }

  getRandomCard(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    let random_number = Math.floor(Math.random() * (max - min)) + min;
    if (random_number === 1) {
      return 11;
    } else if (random_number > 9) {
      return 10;
    } else {
      return random_number
    }
  }
}
