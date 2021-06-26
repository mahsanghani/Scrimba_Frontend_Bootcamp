import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-war',
  templateUrl: './war.component.html',
  styleUrls: ['./war.component.css']
})
export class WarComponent implements OnInit {
  deckId: string = ''
  computerScore: number = 0
  myScore: number = 0
  cardsContainer: any = document.getElementById("cards")
  newDeckBtn: any = document.getElementById("new-deck")
  drawCardBtn: any = document.getElementById("draw-cards")
  header: any = document.getElementById("header")
  remainingText: any = document.getElementById("remaining")
  computerScoreEl: any = document.getElementById("computer-score")
  myScoreEl: any = document.getElementById("my-score")

  constructor() { }

  ngOnInit(): void {
    const handleClick = () => {
      this.deckId
      const handleClick = () => {
        fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
          .then(res => res.json())
          .then(data => {
            this.remainingText.textContent = `Remaining cards: ${data.remaining}`
            this.deckId = data.deck_id
            console.log(this.deckId)
          })
      }

      this.newDeckBtn.addEventListener("click", handleClick)

      this.drawCardBtn.addEventListener("click", () => {
        fetch(`https://apis.scrimba.com/deckofcards/api/deck/${this.deckId}/draw/?count=2`)
          .then(res => res.json())
          .then(data => {
            this.remainingText.textContent = `Remaining cards: ${data.remaining}`
            this.cardsContainer.children[0].innerHTML = `
                <img src=${data.cards[0].image} class="card" />
            `
            this.cardsContainer.children[1].innerHTML = `
                <img src=${data.cards[1].image} class="card" />
            `
            const winnerText = determineCardWinner(data.cards[0], data.cards[1])
            this.header.textContent = winnerText

            if (data.remaining === 0) {
              this.drawCardBtn.disabled = true
              if (this.computerScore > this.myScore) {
                // display "The computer won the game!"
                this.header.textContent = "The computer won the game!"
              } else if (this.myScore > this.computerScore) {
                // display "You won the game!"
                this.header.textContent = "You won the game!"
              } else {
                // display "It's a tie game!"
                this.header.textContent = "It's a tie game!"
              }
            }
          })
      })
      const determineCardWinner = (card1: { value: string; }, card2: { value: string; }) => {
        const valueOptions = ["2", "3", "4", "5", "6", "7", "8", "9",
          "10", "JACK", "QUEEN", "KING", "ACE"]
        const card1ValueIndex = valueOptions.indexOf(card1.value)
        const card2ValueIndex = valueOptions.indexOf(card2.value)

        if (card1ValueIndex > card2ValueIndex) {
          this.computerScore++
          this.computerScoreEl.textContent = `Computer score: ${this.computerScore}`
          return "Computer wins!"
        } else if (card1ValueIndex < card2ValueIndex) {
          this.myScore++
          this.myScoreEl.textContent = `My score: ${this.myScore}`
          return "You win!"
        } else {
          return "War!"
        }
      }
    }
  }
}
