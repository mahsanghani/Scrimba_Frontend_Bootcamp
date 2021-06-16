import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {
  player1Score: number;
  player2Score: number;
  player1Turn: boolean;
  player1Dice: any;
  player2Dice: any;
  player1Scoreboard: any;
  player2Scoreboard: any;
  message: any;
  rollBtn: any;
  resetBtn: any;
  randomNumber: number;

  constructor() {
    this.player1Score = 0,
    this.player2Score = 0,
    this.player1Turn = true,
    this.player1Dice = document.getElementById("player1Dice"),
    this.player2Dice = document.getElementById("player2Dice"),
    this.player1Scoreboard = document.getElementById("player1Scoreboard"),
    this.player2Scoreboard = document.getElementById("player2Scoreboard"),
    this.message = document.getElementById("message"),
    this.rollBtn = document.getElementById("rollBtn"),
    this.resetBtn = document.getElementById("resetBtn"),
    this.randomNumber = 0
  }

  ngOnInit(): void {
    const showResetButton = () => {
      this.rollBtn.style.display = "none"
      this.resetBtn.style.display = "block"
    }

    if(this.rollBtn) {
      this.rollBtn.addEventListener("click", () => {
      this.randomNumber = Math.floor(Math.random() * 6) + 1

      if (this.player1Turn) {
        this.player1Score += this.randomNumber
        this.player1Scoreboard.textContent = this.player1Score
        this.player1Dice.textContent = this.randomNumber
        this.player1Dice.classList.remove("active")
        this.player2Dice.classList.add("active")
        this.message.textContent = "Player 2 Turn"
      } else {
        this.player2Score += this.randomNumber
        this.player2Scoreboard.textContent = this.player2Score
        this.player2Dice.textContent = this.randomNumber
        this.player2Dice.classList.remove("active")
        this.player1Dice.classList.add("active")
        this.message.textContent = "Player 1 Turn"
      }

      if (this.player1Score >= 20) {
        this.message.textContent = "Player 1 Won 🥳"
        showResetButton()
      }  else if (this.player2Score >= 20) {
        this.message.textContent = "Player 2 Won 🎉"
        showResetButton()
      }
      this.player1Turn = !this.player1Turn
    })

    if(this.resetBtn) {
      this.resetBtn.addEventListener("click", function(){
        reset()
      })
    }

      const reset = () => {
      this.player1Score = 0
      this.player2Score = 0
      this.player1Turn = true
      this.player1Scoreboard.textContent = 0
      this.player2Scoreboard.textContent = 0
      this.player1Dice.textContent = "-"
      this.player2Dice.textContent = "-"
      this.message.textContent = "Player 1 Turn"
      this.resetBtn.style.display = "none"
      this.rollBtn.style.display = "block"
      this.player2Dice.classList.remove("active")
      this.player1Dice.classList.add("active")
    }
  }}
}
